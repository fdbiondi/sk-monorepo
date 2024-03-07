import { cookies } from 'next/headers';

import { createClient } from '@/lib/supabase/server';

const Page: React.FC<{ params: { studentId: string } }> = async ({
  params: { studentId },
}) => {
  const supabase = createClient(cookies());
  const { data: _data, error } = await supabase
    .from('students_products')
    .select('products(*)')
    .eq('student_id', studentId);

  if (error) {
    console.error('user error', error);

    return null;
  }

  return <p>{studentId}</p>;
};
export default Page;
