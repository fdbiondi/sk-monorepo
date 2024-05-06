import { AnythingScalarType } from '../typeDefs/anythingScalarType';

import { mockQuery } from './mocks/mockQuery';
import { createCustomerCodeMutation } from './mutations';
import { categoriesQuery, configurationQuery, productsQuery } from './queries';

export default {
  Query: {
    products: productsQuery,
    categories: categoriesQuery,
    configuration: configurationQuery,
    mock: mockQuery,
  },
  Mutation: {
    createCustomerCode: createCustomerCodeMutation,
  },
  Anything: AnythingScalarType,
};
