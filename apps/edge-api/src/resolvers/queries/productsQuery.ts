import { extractFromResponse } from '../../helpers';
import {
  createSupabaseClient,
  generateSupabaseToken,
} from '../../helpers/supabase';
import { AppError } from '../../models/errors';
import { Product } from '../../types';
import { Context, MockResponseData } from '../../typings';

const fromMock = async (context: Context) => {
  const { data } =
    await context.fetchMockApi<Partial<{ products: Product[] }>>();

  return extractFromResponse<MockResponseData>(data, 'products') as Product[];
};

export const productsQuery = async (
  _obj: unknown,
  _args: unknown,
  context: Context
) => {
  if (context.mustRespondWithMock) {
    return await fromMock(context);
  }

  if (context.request.user === undefined) {
    throw new AppError(undefined, 'UNAUTHORIZED');
  }

  const token = await generateSupabaseToken(context.request.user);
  const supabase = createSupabaseClient(token);

  const { data: products, error } = await supabase
    .from('students_product_tiers')
    .select(
      `
      tier:product_tiers(
        product:products(
          id,
          name,
          image,
          category_id,
          category:categories(name)
        ),
        sku,
        created_at
      )`
    )
    .order('tier(created_at)', { ascending: false });

  if (error !== null) {
    throw new AppError(error.message);
  }

  // TODO check here if image was requested or not
  const paths: string[] = products
    .map(({ tier }) => tier?.product?.image ?? '')
    .filter(Boolean);

  const { data: signedUrls } = await supabase.storage
    .from('products')
    .createSignedUrls(paths, 3600);

  return products.map(({ tier }) => {
    const { product } = tier ?? { product: null };

    if (tier === null || product === null) {
      return null;
    }

    // ### check here if image was requested or not
    const { signedUrl: image } =
      signedUrls?.find((signedUrl) => signedUrl.path === product.image) ?? {};

    return {
      id: product.id,
      name: product.name,
      image,
      category_id: product.category_id,
      category: product.category,
      sku: tier.sku ?? '',
      adquired_at: tier.created_at,
      destination: "NOT_IMPLEMENTED"
    };
  });
};
