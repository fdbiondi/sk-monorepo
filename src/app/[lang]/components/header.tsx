import { cookies } from 'next/headers';
import Link from 'next/link';

import AuthButton from '@/components/auth-button';
import { createClient } from '@/lib/supabase/server';

const Header: React.FC = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  return (
    <header className="w-full flex items-center justify-between px-8 h-20 text-gray-400 border-b border-gray-700 shadow-lg">
      <Link href="/">
        <h3>Skillstery</h3>
      </Link>

      {supabase && <AuthButton />}
    </header>
  );
};

export default Header;
