import TenantSelector from './_components/tenant-selector';

import { PageProps } from '@/typings';

const Page: React.FC<PageProps> = async ({
  params: { tenant } = { tenant: '' },
}) => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="border border-gray-700 w-72 rounded-md">
        <TenantSelector tenantId={tenant} big />
      </div>
    </div>
  );
};

export default Page;
