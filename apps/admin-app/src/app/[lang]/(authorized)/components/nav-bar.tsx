import { UsersRound, Package, Group } from 'lucide-react';
import { cookies } from 'next/headers';
import Link from 'next/link';

import { getDictionary } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { WithLang } from '@/typings';

const NavBar: React.FC<WithLang> = async ({ lang }) => {
  const dictionary = await getDictionary(lang);
  const supabase = createClient(cookies());

  const { error } = await supabase.auth.getUser();

  if (error) {
    console.error('user error', error);

    return null;
  }

  return (
    <nav className="flex flex-col h-full text-gray-400 pt-2 border-r border-gray-700">
      <Link
        href="/students"
        className="flex items-center gap-2 p-4 hover:text-gray-100 border-b border-gray-700 hover:shadow-md"
      >
        <UsersRound size={28} strokeWidth={1.5} />
        {dictionary.nav.students}
      </Link>

      <Link
        href="/products"
        className="flex items-center gap-2 p-4 hover:text-gray-100 border-b border-gray-700 hover:shadow-md"
      >
        <Package size={28} strokeWidth={1.5} />
        {dictionary.nav.products}
      </Link>
      <Link
        href="/categories"
        className="flex items-center gap-2 p-4 hover:text-gray-100 border-b border-gray-700 hover:shadow-md"
      >
        <Group size={28} strokeWidth={1.5} />
        {dictionary.nav.categories}
      </Link>
    </nav>
  );
};

export default NavBar;
