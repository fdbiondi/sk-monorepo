import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import NavBar from './NavBar';

const Layout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const supabase = createClient(cookies());
  const { data: user, error } = await supabase.auth.getUser();
  if (error) {
    console.error('user error', error);
    redirect('/login');
  }
  return (
    <div className="grid grid-cols-[300px,1fr] h-full">
      <NavBar />
      {children}
    </div>
  );
};
export default Layout;
