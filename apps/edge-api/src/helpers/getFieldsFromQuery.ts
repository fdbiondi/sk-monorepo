import { parseGql } from "graphql-js-tree";

import { schemaFileContents } from "../typings";

export function getFieldsFromQuery(
  query: string,
  queryFieldName: string,
  filterList: string[]
) {
  // get the tree from the query
  const parsedTrees = parseGql(query, schemaFileContents);

  const children = parsedTrees[0]?.children;

  if (children === undefined) {
    return [];
  }

  // find the current query field
  const queryTree = children.find((child) => child.name === queryFieldName);

  if (queryTree?.children === undefined) {
    return [];
  }

  return queryTree.children
    .filter((child) => filterList.includes(child.name ?? ""))
    .map((child) => child.name);
}
