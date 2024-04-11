import { Plugin } from "graphql-yoga";

import { parseToken, verifyToken } from "../helpers";
import { Context, User } from "../typings";

type SetAuthorizationFn = (
  context: Context,
) => (options: { user?: User; token?: string }) => void;

export function useAuthorization(setAuth: SetAuthorizationFn): Plugin {
  return {
    async onRequest({ endResponse, fetchAPI, serverContext, request }) {
      const authorizationHeader = request.headers.get("Authorization");

      if (authorizationHeader === null) {
        setAuth(serverContext as Context)({ token: undefined, user: undefined });

        return;
      }

      try {
        const token = authorizationHeader.replace("Bearer ", "");
        const tokenInfo = await verifyToken({
          token,
          userPoolId: globalThis.COGNITO_USER_POOL_ID,
          clientId: globalThis.COGNITO_APP_CLIENT_ID,
        });

        if (tokenInfo === null) {
          throw new Error("Token not found");
        }

        if (tokenInfo.token_use === "access") {
          setAuth(serverContext as Context)({ user: undefined, token: undefined });

          endResponse(new fetchAPI.Response(JSON.stringify({ message: "Token use not allowed" }), {
            headers: {
              "Content-Type": "application/json",
            },
            status: 400,
            statusText: "Token use not allowed: access. Expected: id",
          }));

          return;
        }

        const user = parseToken(tokenInfo) as User;

        setAuth(serverContext as Context)({ user, token });
      } catch {
        setAuth(serverContext as Context)({ token: undefined, user: undefined });
      }
    },
  };
}
