import { GraphQLError, GraphQLSchema } from "graphql";
import { applyMiddleware } from "graphql-middleware";

import { ErrorType } from "../typings";

export function errorHandlerMiddleware(schema: GraphQLSchema) {
  return applyMiddleware(schema, async (resolve, root, args, context, info) => {
    try {
      const result = await resolve(root, args, context, info);

      return result;
    } catch (error) {
      throw new GraphQLError(error.message as string, {
        extensions: { code: error.cause ?? "INTERNAL_ERROR" as ErrorType },
      });
    }
  });
}
