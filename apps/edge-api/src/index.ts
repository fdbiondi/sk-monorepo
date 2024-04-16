import { createYoga, createSchema, useExtendContext } from "graphql-yoga";

import { fetchMockApi } from "./helpers";
import { errorHandlerMiddleware } from "./middlewares";
import { respondWithMock } from "./mocks";
import { useAuthorization } from "./plugins";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import { Context } from "./typings";

const schema = createSchema({
  typeDefs,
  resolvers,
});

const yoga = createYoga({
  schema: errorHandlerMiddleware(schema),
  maskedErrors: false,

  graphiql: {
    defaultQuery: `
      {
        products {
          id
          name
          image
        }
      }
    `,
    headers: `{
      "Authorization": "<IdToken from cognito login response>"
    }`,
  },

  plugins: [
    useAuthorization((context: Context) => {
      return ({ user, token }) => {
        context.request.user = user;
        context.request.token = token;
      };
    }),

    useExtendContext(async (context: Context) => {
      const mockCache = fetchMockApi(context);
      const mustRespondWithMock = respondWithMock(context);

      if (
        mustRespondWithMock &&
        mockCache !== undefined &&
        typeof mockCache === "function"
      ) {
        try {
          await mockCache();
        } catch {
          // continue regardless of error
        }
      }

      return {
        fetchMockApi: mockCache,
        mustRespondWithMock,
      };
    }),
  ],
});

/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
self.addEventListener("fetch", yoga);
