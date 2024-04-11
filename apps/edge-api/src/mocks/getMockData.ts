import { getFieldsFromQuery } from "../helpers";
import { Context, MockProperty } from "../typings";

/**
 * usage example:
 *
 * ```ts
 * const mapKey = "some_collection";
 * const mockFieldArr = [{
 *    mapKey: "some_collection",
 *    queryField: "some_field_from_response",
 *    checkFields: ["fields_to_extract"],
 *    defaultValue: [],
 *    fetchResult: async function (context) {
 *      const { data } = await context.fetchMockApi<MockResponseData>();
 *      return extractFromResponse<MockResponseData, SomeCollectionItem[]>(data, "response_field");
 *    },
 * }];
 * const mockData = await getMockData(context, mockFieldArr);
 * const result = mockData.get(mapKey);
 * ```
 *
 */
export async function getMockData(
  context: Context,
  mockFields: MockProperty[]
) {
  const mockData = new Map<string, unknown[] | unknown>();

  for (const prop of mockFields) {
    if (mockData.has(prop.queryField)) {
      continue;
    }

    const presentFields = getFieldsFromQuery(
      context.params.query,
      prop.queryField,
      Object.values(prop.checkFields).map((field) => field)
    );

    if (prop.checkFields.some((field) => presentFields.includes(field))) {
      try {
        const result = await prop.fetchResult(context);

        mockData.set(prop.mapKey, result);
      } catch {
        mockData.set(prop.mapKey, prop.defaultValue);
      }
    } else {
      mockData.set(prop.mapKey, prop.defaultValue);
    }
  }

  return mockData;
}
