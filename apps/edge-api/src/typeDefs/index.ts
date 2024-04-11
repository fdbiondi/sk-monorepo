import { gql } from "graphql-tag";

export default gql`
  type Product {
    id: ID!
    name: String!
    image: String
    category_id: ID
    category: Category
  }

  type Category {
    id: ID!
    name: String!
  }

  type Configuration {
    display_categories: Boolean
    display_title: Boolean
    graph_sort: String
    category_sort: [ID!]
  }

  type CustomerCode {
    id: ID!
    code: String!
  }

  type Query {
    products: [Product]
    categories: [Category]
    configuration: Configuration
  }

  type Mutation {
    createCustomerCode(code: String!): CustomerCode
  }
`;
