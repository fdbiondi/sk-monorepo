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

const Page: React.FC<PageWithLang> = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);
  const supabase = createClient(cookies());
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    console.error('user error', error);

    return null;
  }

  return (
    <div>
      <div className="flex m-4">
        <p className="font-bold text-2xl flex-1">
          {dictionary.products.table.caption}
        </p>
        <Button asChild>
          <Link href={'/products/new'}>{dictionary.products.table.add}</Link>
        </Button>
      </div>

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
  );
};

export default Page;
