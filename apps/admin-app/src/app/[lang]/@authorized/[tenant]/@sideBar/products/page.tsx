import TenantSelector from '../../../_components/tenant-selector';
import {
  SecondaryLink,
  NavigationUpper,
  PrimaryNavLinks,
  SecondarySection,
} from '../_components';
import PrimarySection from '../_components/primary-section';

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
        <h1 className="font-bold text-lg">{dictionary.nav.products}</h1>
        <SecondaryLink link={`/${tenant}/products`} active>
          {dictionary.nav.allProducts}
        </SecondaryLink>
        <SecondaryLink link={`/${tenant}/products/categories`}>
          {dictionary.nav.categories}
        </SecondaryLink>
      </SecondarySection>
    </>
  );
};

export default Page;
