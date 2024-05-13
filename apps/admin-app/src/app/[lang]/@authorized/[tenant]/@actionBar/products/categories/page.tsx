import Link from 'next/link';

import { ViewArchived, Nav } from '../../_components';

import { Button } from '@/components/ui/button';
import { getDictionary } from '@/lib/i18n';
import { PageProps } from '@/typings';

const Page: React.FC<PageProps> = async ({
  params: { lang } = { lang: 'en' },
  searchParams: { viewArchived } = { viewArchived: 'false' },
}) => {
  const dictionary = await getDictionary(lang);

  return (
    <Nav>
      <div className="flex m-4 gap-5">
        <p className="font-bold text-2xl flex-1">
          {dictionary.categories.table.caption}
        </p>
        <ViewArchived
          viewArhived={viewArchived === 'true'}
          dictionary={dictionary}
        />
        <Button asChild>
          <Link href={'/categories/new'}>
            {dictionary.categories.table.add}
          </Link>
        </Button>
      </div>
    </Nav>
  );
};

export default Page;
