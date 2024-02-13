import jwt from 'jsonwebtoken';
export const generateSupabaseToken = (data: any) => {
  return jwt.sign(data, String(process.env.SUPABASE_JWT_SECRET));
};
