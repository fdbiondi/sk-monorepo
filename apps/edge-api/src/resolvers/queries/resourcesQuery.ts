import { extractFromResponse } from '../../helpers';
import { Context } from '../../typings';

export const resourceQuery = async (
  _obj: unknown,
  _args: unknown,
  context: Context
) => {
  const { data } = await context.fetchMockApi<{ data: unknown }>();

  return extractFromResponse(data);
};
