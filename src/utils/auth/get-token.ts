import { headers as nextHeaders } from 'next/headers';

export const getToken = () => {
  const headers = nextHeaders();
  const token = headers.get('Authorization')?.split('Bearer ')[1];
  if (!token) {
    throw new Response(null, { status: 401 });
  }
  return token;
};
