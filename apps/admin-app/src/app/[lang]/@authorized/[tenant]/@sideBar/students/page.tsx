import {
  NavigationUpper,
  PrimaryNavLinks,
  PrimarySection,
  SecondaryLink,
  SecondarySection,
} from '../_components';

import { getDictionary } from '@/lib/i18n';
import { PageProps } from '@/typings';
import TenantSelector from '../../../_components/tenant-selector';

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
          <h1 className="font-bold text-lg">{dictionary.nav.students}</h1>
          <SecondaryLink link={`/${tenant}/students`} active>
            {dictionary.nav.allStudents}
          </SecondaryLink>
        </nav>
      </SecondarySection>
    </>
  );
};

export default Page;
