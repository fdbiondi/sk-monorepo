import { cookies } from 'next/headers';
import React from 'react';

import { createClient } from '@/lib/supabase/server';

interface LayoutProps {
  authorized: React.ReactNode;
  login: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = async ({ authorized, login }) => {
  const supabase = createClient(cookies());
  const { data } = await supabase.auth.getUser();

  return <>{data.user ? authorized : login}</>;
};

export default Layout;
