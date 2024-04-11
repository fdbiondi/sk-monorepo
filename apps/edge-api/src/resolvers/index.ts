import { categoriesQuery, configurationQuery, productsQuery } from "./queries";
import { createCustomerCodeMutation } from "./mutations";

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
