import Link from 'next/link';

import { Nav, ViewArchived } from '../_components';

import { Button } from '@/components/ui/button';
import { getDictionary } from '@/lib/i18n';
import { PageProps } from '@/typings';

const Page: React.FC<PageProps> = async ({
  params: { lang } = { lang: 'en' },
  searchParams: { viewArchived } = { viewArchived: 'false' },
}) => {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <p className="font-bold text-2xl flex-1">
        {dictionary.students.table.caption}
      </p>
      <ViewArchived
        viewArhived={viewArchived === 'true'}
        dictionary={dictionary}
      />
      <Button asChild>
        <Link href={'students/new'}>{dictionary.students.table.add}</Link>
      </Button>
    </>
  );
};

export default Page;
