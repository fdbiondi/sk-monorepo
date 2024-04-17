import { ErrorMessages, MockApiResponse } from '../../typings';

const cause = 'MOCK_REQUEST_NOT_FOUND_ERROR';

export class MockRequestNotFoundError extends Error {
  constructor(response: MockApiResponse) {
    super(ErrorMessages[cause], { cause });

    this.stack =
      response.error !== undefined
        ? JSON.stringify(response.error)
        : 'mock request not found error';
  }
}
