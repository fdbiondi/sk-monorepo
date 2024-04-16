import { Context } from '../typings';

export function respondWithMock(context: Context) {
  const defaultValue = false;
  const header = context.request.headers.get('X-Respond-With-Mock');

  if (header === null) {
    return defaultValue;
  }

  return header === 'true' || header === '1';
}
