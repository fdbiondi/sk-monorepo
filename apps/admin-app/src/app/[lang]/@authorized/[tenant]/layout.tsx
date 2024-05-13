import React from 'react';

import { LayoutProps } from '@/typings';

interface Props extends LayoutProps {
  actionBar: React.ReactNode;
  sideBar: React.ReactNode;
  main: React.ReactNode;
}

const Layout: React.FC<Props> = async ({
  actionBar,
  sideBar,
  main,
}) => {

  return (
    <div className="grid grid-cols-[300px,1fr] grid-rows-[48px,1fr] h-full">
      {sideBar}
      {actionBar}
      {main}
    </div>
  );
};

export default Layout;
