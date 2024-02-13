import { getStudentFromToken } from '@/utils/auth/get-student-from-token';
import { getToken } from '@/utils/auth/get-token';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
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
export const POST = async (request: Request) => {
  const { productId } = await request.json();
  const token = getToken();
  const student = getStudentFromToken();
  const supabase = createClient(cookies(), token);
  const payload = {
    product_id: productId,
    student_id: student.id,
  };
  console.log('purchase payload: ', payload);
  const { data, error } = await supabase
    .from('students_products')
    .insert(payload);
  if (error) {
    console.log('purchase error: ', error);
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
