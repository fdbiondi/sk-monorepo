import { describe, expect, it } from '@jest/globals';
import { fn } from 'jest-mock';

import {
  createSupabaseClient,
  generateSupabaseToken,
} from '../../helpers/supabase';

import { categoriesQuery } from './categoriesQuery';

jest.mock('../../helpers/supabase/generateSupabaseToken');
jest.mock('../../helpers/supabase/createSupabaseClient');

describe('categoriesQuery', () => {
  const contextMock: Record<string, unknown> = {
    fetchMockApi: fn(),
    mustRespondWithMock: false,
    request: {
      headers: {
        get: fn(),
      },
      user: {
        sub: 'student-uuid',
      },
    },
  };

  it('get mock data when student id present', async () => {
    const expected = [
      {
        id: 'foo-uuid',
        name: 'Foo',
      },
      {
        id: 'bar-uuid',
        name: 'Bar',
      },
    ];

    contextMock.mustRespondWithMock = true;
    contextMock.fetchMockApi = fn().mockReturnValueOnce({
      data: { categories: expected },
    });

    const result = await categoriesQuery(undefined, undefined, contextMock);

    expect(result).toEqual(expected);
    contextMock.mustRespondWithMock = false;
  });

  it('returns categories for an authorized user', async () => {
    generateSupabaseToken.mockReturnValueOnce('token');
    createSupabaseClient.mockReturnValueOnce({
      from: fn().mockReturnValue({
        select: fn().mockReturnValueOnce({
          data: [
            {
              id: 'foo',
              name: 'cat foo ',
              order: 1,
            },
            {
              id: 'bar',
              name: 'cat bar',
              order: 0,
            },
          ],
          error: null,
        }),
      }),
    });

    const result = await categoriesQuery(undefined, undefined, contextMock);

    expect(result).toEqual([
      {
        id: 'bar',
        name: 'cat bar',
        order: 0,
      },
      {
        id: 'foo',
        name: 'cat foo ',
        order: 1,
      },
    ]);
  });
});
