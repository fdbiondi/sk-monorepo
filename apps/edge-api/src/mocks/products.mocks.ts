import { Category } from "../../types";
import { Image, MockProperty, MockResponseData } from "../typings";
import { extractFromResponse } from "../helpers";

export const ProductMockConfig: MockProperty[] = [
  {
    mapKey: "categories",
    queryField: "products",
    checkFields: ["category", "category_id"],
    defaultValue: [] as Category[],
    fetchResult: async function (context) {
      const { data } = await context.fetchMockApi<MockResponseData>();

      // find a way to cache or store responses from fetchMockApi
      return extractFromResponse<MockResponseData, Category[]>(data, "categories");
    },
  },

  {
    mapKey: "categories_sort",
    queryField: "configuration",
    checkFields: ["category_sort"],
    defaultValue: [],
    fetchResult: async function (context) {
      const { data } = await context.fetchMockApi<MockResponseData>();

      return extractFromResponse<MockResponseData, string[]>(data, "configuration.category_sort");
    },
  },

  {
    mapKey: "images",
    queryField: "products",
    checkFields: ["image"],
    defaultValue: [] as Image[],
    fetchResult: async function (context) {
      const { data } = await context.fetchMockApi<MockResponseData>();

      return extractFromResponse<MockResponseData, Image[]>(data, "products.image");
    },
  },
];
