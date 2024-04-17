import { createCustomerCodeMutation } from './mutations';
import { categoriesQuery, configurationQuery, productsQuery } from './queries';

export default {
  Query: {
    products: productsQuery,
    categories: categoriesQuery,
    configuration: configurationQuery,
  },
  Mutation: {
    createCustomerCode: createCustomerCodeMutation,
  },
};
