import { extractFromResponse } from '../../helpers';
// import { AppError } from '../../models/errors';
import { Context } from '../../typings';

export const mockQuery = async (
  _obj: unknown,
  _args: unknown,
  context: Context
) => {
  // if (context.mustRespondWithMock) {

  const { data } = await context.fetchMockApi<{ data: unknown }>();

  return extractFromResponse(data, '');

  // }
  //
  // if (context.request.user === undefined) {
  //   throw new AppError(undefined, 'UNAUTHORIZED');
  // }
  //
  // return [];
};
