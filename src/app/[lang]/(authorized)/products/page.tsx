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
import { getDictionary } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { PageWithLang } from '@/typings';

import ProductTableRow from './components/table-row';
import ViewArchived from './components/view-archived';

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
      ? await supabase.from('products').select('*')
      : await supabase.from('products').select('*').is('archived_at', null);

  if (error) {
    console.error('user error', error);

    return null;
  }

  return (
    <div>
      <div className="flex m-4 gap-1">
        <p className="font-bold text-2xl flex-1">
          {dictionary.products.table.caption}
        </p>
        <ViewArchived
          viewArhived={viewArchived === 'true'}
          dictionary={dictionary}
        />
        <Button asChild>
          <Link href={'/products/new'}>{dictionary.products.table.add}</Link>
        </Button>
      </div>
      <div>
        <Table>
          <TableHeader className="h-20">
            <TableRow>
              <TableHead>{dictionary.products.table.columns.id}</TableHead>
              <TableHead>{dictionary.products.table.columns.name}</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((product) => (
              <ProductTableRow
                product={product}
                key={product.id}
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
