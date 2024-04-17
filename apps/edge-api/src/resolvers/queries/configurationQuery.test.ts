import { describe, expect, it } from '@jest/globals';
import { fn } from 'jest-mock';

import {
  createSupabaseClient,
  generateSupabaseToken,
} from '../../helpers/supabase';

import { configurationQuery } from './configurationQuery';

jest.mock('../../helpers/supabase/generateSupabaseToken');
jest.mock('../../helpers/supabase/createSupabaseClient');

describe('configurationQuery', () => {
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
    const expected = {
      display_categories: true,
      display_title: false,
      category_sort: [],
    };

    contextMock.mustRespondWithMock = true;
    contextMock.fetchMockApi = fn().mockReturnValueOnce({
      data: { configuration: expected },
    });

    const result = await configurationQuery(undefined, undefined, contextMock);

    expect(result).toEqual(expected);
    contextMock.mustRespondWithMock = false;
  });

  it('returns configuration for an authorized user', async () => {
    generateSupabaseToken.mockReturnValueOnce('token');
    createSupabaseClient.mockReturnValueOnce({
      from: fn().mockReturnValue({
        select: fn()
          .mockReturnValueOnce({
            data: [
              {
                id: 'foo-uuid',
                categories_enabled: true,
              },
            ],
            error: null,
          })
          .mockReturnValueOnce({
            data: [
              {
                id: 'cat-1',
                order: 1,
              },
              {
                id: 'cat-2',
                order: 0,
              },
            ],
            error: null,
          }),
      }),
    });

    const result = await configurationQuery(undefined, undefined, contextMock);

    expect(result).toEqual({
      display_categories: true,
      display_title: false,
      category_sort: ['cat-2', 'cat-1'],
    });
  });
});
