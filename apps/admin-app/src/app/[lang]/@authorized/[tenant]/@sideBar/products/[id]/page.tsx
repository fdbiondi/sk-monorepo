import Link from 'next/link';

import {
  NavigationUpper,
  PrimaryNavLinks,
  PrimarySection,
  SecondarySection,
} from '../../_components';

import TenantSelector from '@/app/[lang]/@authorized/_components/tenant-selector';
import { getDictionary } from '@/lib/i18n';
import { PageProps } from '@/typings';

const Page: React.FC<PageProps> = async ({
  params: { lang, tenant } = { lang: 'en', tenant: '' },
}) => {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <PrimarySection>
        <div className="border-b border-gray-700">
          <TenantSelector tenantId={tenant} />
        </div>
        <PrimaryNavLinks />
      </PrimarySection>
      <SecondarySection>
        <NavigationUpper lang={lang} />
        <nav className="flex flex-col h-full text-gray-400 p-2">
          <h1 className="font-bold text-lg">{dictionary.nav.products}</h1>
          <Link
            href={'#'}
            className="flex items-center gap-2 p-4 text-gray-100 shadow-md"
          >
            <h1 className="text-lg underline">{dictionary.nav.allProducts}</h1>
          </Link>
          <Link
            href={'products/categories'}
            className="flex items-center gap-2 p-4 hover:text-gray-100 hover:shadow-md"
          >
            <h1 className="text-lg">{dictionary.nav.categories}</h1>
          </Link>
        </nav>
      </SecondarySection>
    </>
  );
};

export default Page;
