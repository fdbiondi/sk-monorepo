import AuthButton from '../components/AuthButton';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link';

const Header: React.FC = async () => {
  const cookieStore = cookies();
  const tenantId = cookieStore.get('tenantId');

  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from('tenants')
    .select('id, name, admins(id, user_id)');
  console.log(
    'tenant:',
    data?.map((t) => t.admins),
  );
  console.log('tenant error:', error);
  return (
    <header className="w-full flex justify-center h-16 bg-indigo-400 border-b-[1px] border-indigo-700">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <Link href="/">
          <h3>Skillstery</h3>
        </Link>

        {supabase && <AuthButton />}
      </div>
    </header>
  );
};

export default Header;
