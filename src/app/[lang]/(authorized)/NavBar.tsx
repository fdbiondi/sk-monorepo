import { cookies } from 'next/headers';
import Link from 'next/link';

import { createClient } from '@/lib/supabase/server';

const NavBar: React.FC = async () => {
  const supabase = createClient(cookies());
  const { data: user, error } = await supabase.auth.getUser();

  if (error) {
    console.error('user error', error);

    return null;
  }

  return (
    <div className="flex flex-col p-4 bg-indigo-400 h-full">
      <h1>Welcome, {user?.user?.email}</h1>
      <ul>
        <li>
          <Link href="students">Students </Link>
        </li>
        <li>
          <Link href="products">Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
