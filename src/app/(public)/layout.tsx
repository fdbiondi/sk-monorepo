import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const Layout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const supabase = createClient(cookies());
  const { data } = await supabase.auth.getUser();
  if (data.user) {
    redirect('/dashboard');
  }
  return <>{children}</>;
};
export default Layout;
