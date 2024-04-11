import { GraphQLArgs } from "graphql";

import { Product } from "../../types";
import { Context, MockResponseData } from "../../typings";
import { extractFromResponse } from "../../helpers";
import {
  createSupabaseClient,
  generateSupabaseToken,
} from "../../helpers/supabase";
import { AppError } from "../../models/errors";

const fromMock = async (context: Context) => {
  const { data } = await context.fetchMockApi<Partial<{ products: Product[] }>>();

  return extractFromResponse<MockResponseData, Product[]>(data, "products");
};

export const productsQuery = async (
  _obj: unknown,
  _args: GraphQLArgs,
  context: Context
) => {
  if (context.mustRespondWithMock) {
    return await fromMock(context);
  }

  if (context.request.user === undefined) {
    throw new AppError(undefined, "UNAUTHORIZED");
  }

  const token = await generateSupabaseToken(context.request.user);
  const supabase = createSupabaseClient(token);

  const { data: studentProducts, error } = await supabase.from("students_products")
    .select(`
        product:products (
          id,
          name,
          image,
          category_id,
          category:categories(id, name)
        )
    `);

  if (error !== null) {
    throw new AppError(error.message);
  }

  const paths: string[] = studentProducts
    .map(({ product }) => product?.image ?? "")
    .filter(Boolean);

  const { data: signedUrls } = await supabase.storage
    .from("products")
    .createSignedUrls(paths, 3600);

  return studentProducts.map(({ product }) => {
    if (product === null) {
      return null;
    }

    const { signedUrl: image } =
      signedUrls?.find((signedUrl) => signedUrl.path === product.image) ?? {};

    return {
      id: product.id,
      name: product.name,
      image,
      category_id: product.category_id,
      category: product.category,
    };
  });
};
