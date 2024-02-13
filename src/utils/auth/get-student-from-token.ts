import { getToken } from './get-token';
import jwt from 'jsonwebtoken';
type Student = {
  id: string;
  first_name: string;
  last_name: string;
  sub: string;
  tenant_id: string;
};
export const getStudentFromToken = () => {
  const token = getToken();
  const decoded = jwt.verify(
    token,
    String(process.env.SUPABASE_JWT_SECRET),
  ) as Student;

  return {
    id: decoded.id,
    first_name: decoded.first_name,
    last_name: decoded.last_name,
    sub: decoded.sub,
    tenant_id: decoded.tenant_id,
  };
};
