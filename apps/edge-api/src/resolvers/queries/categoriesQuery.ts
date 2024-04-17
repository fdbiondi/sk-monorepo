import { extractFromResponse } from '../../helpers';
import {
  createSupabaseClient,
  generateSupabaseToken,
} from '../../helpers/supabase';
import { AppError } from '../../models/errors';
import { Category } from '../../types';
import { Context, MockResponseData } from '../../typings';

const fromMock = async (context: Context) => {
  const { data } =
    await context.fetchMockApi<Partial<{ categories: Category[] }>>();

  return extractFromResponse<MockResponseData>(
    data,
    'categories'
  ) as Category[];
};

export const categoriesQuery = async (
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

  const { data: categories, error } = await supabase
    .from('categories')
    .select('id, name, order');

  if (error !== null) {
    throw new AppError(error.message);
  }

  return categories.sort(
    (curr, next) => Number(curr.order) - Number(next.order)
  );
};
