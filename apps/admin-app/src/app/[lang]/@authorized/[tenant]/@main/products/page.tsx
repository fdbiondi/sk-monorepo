import { cookies } from 'next/headers';
import Link from 'next/link';

import ProductTableRow from './_components/table-row';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import ViewArchived from '@/app/[lang]/@authorized/[tenant]/@actionBar/_components/view-archived';
import { getDictionary } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { PageProps } from '@/typings';

const Page: React.FC<PageProps> = async ({
  params: { lang, tenant } = { lang: 'en', tenant: '' },
  searchParams: { viewArchived } = { viewArchived: 'false' },
}) => {
  const dictionary = await getDictionary(lang);

  const supabase = createClient(cookies());
  const { data, error } =
    viewArchived === 'true'
      ? await supabase.from('products').select('*').eq('tenant_id', tenant)
      : await supabase
          .from('products')
          .select('*')
          .eq('tenant_id', tenant)
          .is('archived_at', null);

  if (error) {
    console.error('user error', error);

    return null;
  }

  if (error !== null) {
    console.error('product query error', error);

    return null;
  }

  return (
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
  );
};

export default Page;
