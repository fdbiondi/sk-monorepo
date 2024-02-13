import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

const Page: React.FC = async () => {
  const supabase = createClient(cookies());
  const { data, error } = await supabase.from('products').select('*');
  if (error) {
    console.error('user error', error);
    return null;
  }
  console.log('data', data);
  return (
    <div>
      {data.map((product) => (
        <div key={product.id} className="grid grid-cols-2 w-[50%] border-b-2">
          <p>{product.id}</p>
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
