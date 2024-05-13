import { Nav } from './_components';

import { LayoutProps } from '@/typings';

const Page: React.FC<LayoutProps> = async ({ children }) => {
  return <Nav>{children}</Nav>;
};
export default Page;
