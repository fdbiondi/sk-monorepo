import { cookies, headers as nextHeaders } from 'next/headers';
import jwt from 'jsonwebtoken';
import { createClient } from '@/utils/supabase/server';
type Student = {
  student_id: string;
  first_name: string;
  last_name: string;
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
  const supabase = createClient(cookies());
  const { data: studentData } = await supabase
    .from('students')
    .select()
    .eq('id', decoded.student_id);
  if (studentData?.length > 0) {
    return new Response(JSON.stringify({}), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-Type': 'application/json',
      },
    });
  }
  const { data, error } = await supabase.from('students').insert({
    id: decoded.student_id,
    first_name: decoded.first_name,
    last_name: decoded.last_name,
  });
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
  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Content-Type': 'application/json',
    },
  });
};
