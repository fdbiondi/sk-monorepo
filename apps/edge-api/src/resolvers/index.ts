import { ObjectScalarType } from '../typeDefs/objectScalarType';

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
  Object: ObjectScalarType,
};
