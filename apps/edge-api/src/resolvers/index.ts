import { AnythingScalarType } from '../typeDefs/anythingScalarType';

import { mockQuery } from './mocks/mockQuery';
import { createCustomerCodeMutation } from './mutations';
import {
  categoriesQuery,
  configurationQuery,
  lessonQuery,
  moduleQuery,
  pageQuery,
  pagesQuery,
  productsQuery,
  resourceQuery,
} from './queries';

export default {
  Query: {
    categories: categoriesQuery,
    configuration: configurationQuery,
    lesson: lessonQuery,
    mock: mockQuery,
    module: moduleQuery,
    page: pageQuery,
    pages: pagesQuery,
    products: productsQuery,
    resource: resourceQuery,
  },
  Mutation: {
    createCustomerCode: createCustomerCodeMutation,
  },
  Anything: AnythingScalarType,
};
