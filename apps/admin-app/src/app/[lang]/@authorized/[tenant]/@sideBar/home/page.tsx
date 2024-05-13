import { Home, UsersRound, Package } from 'lucide-react';
import Link from 'next/link';

import TenantSelector from '../../../_components/tenant-selector';

import { getDictionary } from '@/lib/i18n';
import { PageProps } from '@/typings';

const Page: React.FC<PageProps> = async ({
  params: { tenant: tenantId, lang } = { tenant: '', lang: 'en' },
}) => {
  const dictionary = await getDictionary(lang);

  return (
    <section className="w-full">
      <div className="border-b border-gray-700">
        <TenantSelector tenantId={tenantId} big />
      </div>
      <Link
        href={`/${lang}/${tenantId}/home`}
        className="flex items-center gap-2 p-4 text-gray-100 shadow-md underline"
      >
        <Home size={28} strokeWidth={1.5} />
        {dictionary.nav.home}
      </Link>
      <Link
        href={`/${lang}/${tenantId}/students`}
        className="flex items-center gap-2 p-4 hover:text-gray-100 hover:shadow-md"
      >
        <UsersRound size={28} strokeWidth={1.5} />
        {dictionary.nav.students}
      </Link>

      <Link
        href={`/${lang}/${tenantId}/products`}
        className="flex items-center gap-2 p-4 hover:text-gray-100 hover:shadow-md"
      >
        <Package size={28} strokeWidth={1.5} />
        {dictionary.nav.products}
      </Link>
    </section>
  );
};

export default Page;
