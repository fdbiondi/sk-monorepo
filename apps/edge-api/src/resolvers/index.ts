import { AnythingScalarType } from '../typeDefs/anythingScalarType';

import { mockQuery } from './mocks/mockQuery';
import { createCustomerCodeMutation } from './mutations';
import {
  categoriesQuery,
  configurationQuery,
  pagesQuery,
  productsQuery,
  resourcesQuery,
} from './queries';

export default {
  Query: {
    categories: categoriesQuery,
    configuration: configurationQuery,
    mock: mockQuery,
    pages: pagesQuery,
    products: productsQuery,
    resource: resourcesQuery,
  },
  Mutation: {
    createCustomerCode: createCustomerCodeMutation,
  },
  Anything: AnythingScalarType,
};
