import { cookies } from 'next/headers';

import { createClient } from '@/lib/supabase/server';

const Page: React.FC = async () => {
  const supabase = createClient(cookies());
  const { data, error } = await supabase.from('students').select('*');

  if (error) {
    console.error('user error', error);

    return null;
  }

  return (
    <div>
      {data.map((student) => (
        <div key={student.id} className="grid grid-cols-2 w-[50%] border-b-2">
          <p>{student.first_name}</p>
          <p>{student.last_name}</p>
          <p>{student.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;