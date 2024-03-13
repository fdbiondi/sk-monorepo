import { cookies } from 'next/headers';

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getDictionary } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { PageWithLang } from '@/typings';

import ProductTableHead from './components/PageHead';
import ProductTableRow from './components/ProductTableRow';

export const revalidate = 0;

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
      <ProductTableHead />
      <Table>
        <TableCaption>A list of all products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-96">
              {dictionary.products.table.columns.id}
            </TableHead>
            <TableHead>{dictionary.products.table.columns.name}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((product) => (
            <ProductTableRow product={product} key={product.id} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
