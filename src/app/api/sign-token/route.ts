import jwt from 'jsonwebtoken';

export const POST = async (request: Request) => {
  const data = await request.json();
  const payload = {
    sub: data.sub,
    first_name: data.first_name,
    last_name: data.last_name,
    tenant_id: data.tenant_id,
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  };

  const token = jwt.sign(payload, String(process.env.SUPABASE_JWT_SECRET));
  return new Response(JSON.stringify({ token }), {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Content-Type': 'application/json',
    },
  });
};
