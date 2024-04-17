import { AppError, MockRequestNotFoundError } from '../models/errors';
import { Context, MockApiResponse } from '../typings';

/**
 * Fetches data from a mock API.
 *
 * @param Headers - Request headers.
 * @param GraphQLParams - Request parameters.
 * @returns Function<Promise<MockApiResponse<T>>> - The JSON response from the Mock API.
 * @throws Error - If there is an error in the request.
 */
export function fetchMockApi(context: Context) {
  const store = new Map<string, unknown>();

  return async <T>(): Promise<MockApiResponse<T>> => {
    const options = {
      method: 'POST',
      // we should be able to use the headers from the context
      headers: {
        'Content-Type': 'application/json',
        'x-student-id': context.request.user?.sub ?? '',
      },
      body: JSON.stringify({
        operationName: null,
        query: context.params.query,
        variables: context.params.variables ?? {},
      }),
    };

    if (store.has(JSON.stringify(options))) {
      return JSON.parse(String(store.get(JSON.stringify(options))));
    }

    const result = await fetch(String(globalThis.MOCK_API), options);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const response = (await result.json()) as MockApiResponse<T>;

    if (response.error !== undefined) {
      // in case of error return it to the resolver

      if (response.error.name === 'mockRequestNotFoundError') {
        throw new MockRequestNotFoundError(response);
      } else {
        throw new AppError(response.error.message, 'BAD_REQUEST');
      }
    }

    if (response.data !== undefined) {
      store.set(JSON.stringify(options), JSON.stringify(response));
    }

    return response;
  };
}
