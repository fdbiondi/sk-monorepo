import React from 'react';

import { LayoutProps } from '@/typings';

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  return (
    <nav className="flex h-full text-gray-400 border-r border-gray-700 row-span-2">
      {children}
    </nav>
  );
};

export default Layout;
