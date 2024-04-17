import * as jose from 'jose';

export async function generateSupabaseToken(data?: jose.JWTPayload) {
  if (data === undefined) {
    data = {};
  }

  const secret = new TextEncoder().encode(
    String(globalThis.SUPABASE_JWT_SECRET)
  );
  const alg = 'HS256';

  const jwt = await new jose.SignJWT(data)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer('urn:example:issuer')
    .setAudience('urn:example:audience')
    .setExpirationTime('2h')
    .sign(secret);

  return jwt;
}
