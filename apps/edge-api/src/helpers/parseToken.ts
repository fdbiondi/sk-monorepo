import { CognitoJwtPayload } from "aws-jwt-verify/jwt-model";

import { User } from "../typings";

export function parseToken(token: CognitoJwtPayload) {
  try {
    const user = {
      ...token,
      email: token["email"],
      tenant_id: token["custom:tenantId"],
    };

    return user as User;
  } catch {
    return null;
  }
}
