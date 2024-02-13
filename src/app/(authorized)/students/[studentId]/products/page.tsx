import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

const Page: React.FC<{ params: { studentId: string } }> = async ({
  params: { studentId },
}) => {
  const supabase = createClient(cookies());
  const { data, error } = await supabase
    .from('students_products')
    .select('products(*)')
    .eq('student_id', studentId);
  if (error) {
    console.error('user error', error);
    return null;
  }
  console.log('data', data);
  return <p>{studentId}</p>;
};
export default Page;
