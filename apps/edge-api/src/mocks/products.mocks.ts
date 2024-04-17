import { extractFromResponse } from '../helpers';
import { Category } from '../types';
import { Image, MockProperty, MockResponseData } from '../typings';

export const ProductMockConfig: MockProperty[] = [
  {
    mapKey: 'categories',
    queryField: 'products',
    checkFields: ['category', 'category_id'],
    defaultValue: [] as Category[],
    fetchResult: async function (context) {
      const { data } = await context.fetchMockApi<MockResponseData>();

      // find a way to cache or store responses from fetchMockApi
      return extractFromResponse<MockResponseData>(
        data,
        'categories'
      ) as Category[];
    },
  },

  {
    mapKey: 'categories_sort',
    queryField: 'configuration',
    checkFields: ['category_sort'],
    defaultValue: [],
    fetchResult: async function (context) {
      const { data } = await context.fetchMockApi<MockResponseData>();

      return extractFromResponse<MockResponseData>(
        data,
        'configuration.category_sort'
      ) as string[];
    },
  },

  {
    mapKey: 'images',
    queryField: 'products',
    checkFields: ['image'],
    defaultValue: [] as Image[],
    fetchResult: async function (context) {
      const { data } = await context.fetchMockApi<MockResponseData>();

      return extractFromResponse<MockResponseData>(
        data,
        'products.image'
      ) as Image[];
    },
  },
];
