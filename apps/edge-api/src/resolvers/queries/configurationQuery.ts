import { extractFromResponse } from '../../helpers';
import {
  createSupabaseClient,
  generateSupabaseToken,
} from '../../helpers/supabase';
import { AppError } from '../../models/errors';
import { Configuration } from '../../types';
import { Context, MockResponseData } from '../../typings';

const fromMock = async (context: Context) => {
  const { data } =
    await context.fetchMockApi<Partial<{ configuration: Configuration }>>();

  return extractFromResponse<MockResponseData>(
    data,
    'configuration'
  ) as Configuration;
};

export const configurationQuery = async (
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

  const configuration: Configuration = {
    category_sort: [],
    display_categories: false,
    display_title: false,
  };

  const token = await generateSupabaseToken(context.request.user);
  const supabase = createSupabaseClient(token);

  const { data: tenants, error } = await supabase
    .from('tenants')
    .select('id, categories_enabled');

  if (error !== null) {
    throw new AppError(error.message);
  }

  if (tenants?.length === 0) {
    throw new AppError('Can get configuration', 'NOT_FOUND');
  }

  configuration.display_categories = Boolean(tenants[0]?.categories_enabled);

  const { data: categories } = await supabase
    .from('categories')
    .select('id, order');

  if (categories !== null && categories.length > 0) {
    configuration.category_sort = categories
      .sort((curr, next) => Number(curr.order) - Number(next.order))
      .map((category) => category.id);
  }

  return configuration;
};
