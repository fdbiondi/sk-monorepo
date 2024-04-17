import { beforeEach, describe, expect, it } from '@jest/globals';
import { fn } from 'jest-mock';

import {
  createSupabaseClient,
  generateSupabaseToken,
} from '../../helpers/supabase';

import { productsQuery } from './productsQuery';

jest.mock('../../helpers/supabase/generateSupabaseToken');
jest.mock('../../helpers/supabase/createSupabaseClient');

describe('productsQuery', () => {
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

  beforeEach(() => {
    contextMock.mustRespondWithMock = false;
  });

  it('get mock data when student id present', async () => {
    const expectedProducts = [
      {
        id: 'foo-uuid',
        name: 'Product 1',
      },
      {
        id: 'bar-uuid',
        name: 'Product 2',
      },
    ];

    contextMock.mustRespondWithMock = true;
    contextMock.fetchMockApi = fn().mockReturnValueOnce({
      data: { products: expectedProducts },
    });

    const result = await productsQuery(undefined, undefined, contextMock);

    expect(result).toEqual(expectedProducts);
  });

  it('raise an error when supabase call fails', async () => {
    generateSupabaseToken.mockReturnValueOnce('token');
    createSupabaseClient.mockReturnValueOnce({
      from: fn().mockReturnValueOnce({
        select: fn().mockReturnValueOnce({
          data: null,
          error: { message: 'mock error' },
        }),
      }),
    });

    await expect(async () => {
      await productsQuery(undefined, undefined, contextMock);
    }).rejects.toThrow(Error);
  });

  describe('get products for a student', () => {
    beforeEach(() => {
      generateSupabaseToken.mockReturnValueOnce('token');
      createSupabaseClient.mockReturnValueOnce({
        from: fn().mockReturnValueOnce({
          select: fn().mockReturnValueOnce({
            data: [
              {
                tier: {
                  product: {
                    id: 'foo-uuid',
                    name: 'Product 1',
                    image: '',
                    category_id: 'cat-uuid',
                    category: {
                      id: 'cat-uuid',
                      name: 'cat 1',
                    },
                  },
                },
              },
              {
                tier: {
                  product: {
                    id: 'bar-uuid',
                    name: 'Product 2',
                    image: 'image-path',
                    category_id: 'cat-uuid',
                    category: {
                      id: 'cat-uuid',
                      name: 'cat 1',
                    },
                  },
                },
              },
            ],
            error: null,
          }),
        }),
        storage: {
          from: fn().mockReturnValueOnce({
            createSignedUrls: fn().mockReturnValueOnce({
              data: [
                {
                  path: 'image-path',
                  signedUrl: 'url',
                },
              ],
            }),
          }),
        },
      });
    });

    it('creates instance of supabase client using token from user', async () => {
      await productsQuery(undefined, undefined, contextMock);

      expect(createSupabaseClient).toHaveBeenCalledWith('token');
      expect(generateSupabaseToken).toHaveBeenCalledWith(
        expect.objectContaining({ sub: 'student-uuid' })
      );
    });

    it('returns products for an authorized user', async () => {
      const result = await productsQuery(undefined, undefined, contextMock);

      expect(result).toEqual([
        {
          id: 'foo-uuid',
          name: 'Product 1',
          image: undefined,
          category_id: 'cat-uuid',
          category: expect.objectContaining({ name: 'cat 1' }),
        },
        {
          id: 'bar-uuid',
          name: 'Product 2',
          image: 'url',
          category_id: 'cat-uuid',
          category: expect.objectContaining({ name: 'cat 1' }),
        },
      ]);
    });
  });
});
