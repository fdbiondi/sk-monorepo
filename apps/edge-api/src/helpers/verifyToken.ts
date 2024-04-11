import { CognitoJwtVerifier } from "aws-jwt-verify";

type VerifyTokenOptions = {
  clientId: string;
  token: string;
  userPoolId: string;
  tokenUse?: "id" | "access" | null;
};

export async function verifyToken(options: VerifyTokenOptions) {
  try {
    const { token, userPoolId, clientId, tokenUse = null } = options;
    const verifier = CognitoJwtVerifier.create({
      tokenUse,
      userPoolId,
      clientId,
    });

    const payload = await verifier.verify(token);

    return payload;
  } catch {
    return null;
  }
}
