import { cookies } from 'next/headers';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import ViewArchived from '@/components/view-archived';
import { getDictionary } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { PageWithLang } from '@/typings';

import CategoryTableRow from './components/table-row';

const Page: React.FC<
  PageWithLang & {
    searchParams: {
      viewArchived?: string;
    };
  }
> = async ({ params: { lang }, searchParams: { viewArchived } }) => {
  const dictionary = await getDictionary(lang);

  const supabase = createClient(cookies());
  const { data, error } =
    viewArchived === 'true'
      ? await supabase.from('categories').select('*').order('order')
      : await supabase
          .from('categories')
          .select('*')
          .is('archived_at', null)
          .order('order');

  if (error) {
    console.error('user error', error);

    return null;
  }

  return (
    <div>
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
      <div>
        <Table>
          <TableHeader className="h-20">
            <TableRow>
              <TableHead>{dictionary.categories.table.columns.order}</TableHead>
              <TableHead>{dictionary.categories.table.columns.id}</TableHead>
              <TableHead>{dictionary.categories.table.columns.name}</TableHead>
              <TableHead>
                {dictionary.categories.table.columns.isDefault}
              </TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((category) => (
              <CategoryTableRow
                category={category}
                key={category.id}
                dictionary={dictionary}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Page;
