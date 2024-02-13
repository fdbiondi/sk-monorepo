import { cookies, headers as nextHeaders } from 'next/headers';
import jwt from 'jsonwebtoken';
import { createClient } from '@/utils/supabase/server';
import { generateSupabaseToken } from '@/utils/auth/generate-supabase-token';
type Student = {
  id: string;
  first_name: string;
  last_name: string;
  sub: string;
  tenant_id: string;
};
export const OPTIONS = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Content-Type': 'application/json',
    },
  });
};
export const POST = async () => {
  const headers = nextHeaders();
  const token = headers.get('Authorization')?.split('Bearer ')[1];
  console.log('token', token);
  if (!token) {
    return new Response(null, {
      status: 401,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-Type': 'application/json',
      },
    });
  }
  const decoded = jwt.verify(
    token,
    String(process.env.SUPABASE_JWT_SECRET),
  ) as Student;
  const supabase = createClient(cookies(), token);
  const { data: studentData } = await supabase
    .from('students')
    .select('*')
    .eq('sub', decoded.sub);
  console.log('studentData', studentData);
  if (studentData?.length && studentData?.length > 0) {
    return new Response(
      JSON.stringify({
        token: generateSupabaseToken({
          id: studentData[0].id,
          first_name: studentData[0].first_name,
          last_name: studentData[0].last_name,
          sub: studentData[0].sub,
          tenant_id: studentData[0].tenant_id,
        }),
      }),
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Content-Type': 'application/json',
        },
      },
    );
  }
  const payload = {
    first_name: decoded.first_name,
    last_name: decoded.last_name,
    sub: decoded.sub,
    tenant_id: decoded.tenant_id,
  };
  console.log('student payload: ', payload);
  const { data, error } = await supabase
    .from('students')
    .insert(payload)
    .returns<Student>();
  if (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-Type': 'application/json',
      },
    });
  }
  return new Response(
    JSON.stringify({
      token: generateSupabaseToken({
        id: data.id,
        first_name: data.first_name,
        last_name: data.last_name,
        sub: data.sub,
        tenant_id: data.tenant_id,
      }),
    }),
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-Type': 'application/json',
      },
    },
  );
};
