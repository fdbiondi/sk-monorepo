import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { Locale } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';

import NavBar from './components/nav-bar';

const Layout: React.FC<
  React.PropsWithChildren & { params: { lang: Locale } }
> = async ({ children, params: { lang } }) => {
  const supabase = createClient(cookies());
  const { error } = await supabase.auth.getUser();

  if (error) {
    redirect('/login');
  }

  return (
    <div className="grid grid-cols-[300px,1fr] h-full">
      <NavBar lang={lang} />
      {children}
    </div>
  );
};
export default Layout;
