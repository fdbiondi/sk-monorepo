import { extractFromResponse } from '../../helpers';
import { Context } from '../../typings';

export const lessonsQuery = async (
  _obj: unknown,
  _args: unknown,
  context: Context
) => {
  const { data } = await context.fetchMockApi<{ data: unknown }>();

  return extractFromResponse(data);
};
