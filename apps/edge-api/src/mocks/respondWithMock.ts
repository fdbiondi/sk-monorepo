import * as jose from "jose";

import { Context } from "../typings";

function byPassMock(context: Context) {
  const defaultValue = false;
  const header = context.request.headers.get("X-Respond-With-Mock");

  if (header === null) {
    return defaultValue;
  }

  return header === "false" || header === "0";
}

export function respondWithMock(context: Context) {
  if (byPassMock(context)) {
    return false;
  }

  const auth = context.request.headers.get("Authorization");
  const token = auth?.replace("Bearer ", "") ?? null;

  if (token === null) {
    return false;
  }

  const user = jose.decodeJwt(token);
  const email = String(user?.email).trim();

  return email.startsWith("test_");
}
