import { products } from '@skillstery/orm';
import { isNotNull, isNull } from 'drizzle-orm';
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
import { runQuery } from '@/lib/database';
import { getDictionary } from '@/lib/i18n';
import { PageWithLang } from '@/typings';

import ProductTableRow from './components/table-row';

const Page: React.FC<
  PageWithLang & {
    searchParams: {
      viewArchived?: string;
    };
  }
> = async ({ params: { lang }, searchParams: { viewArchived } }) => {
  const dictionary = await getDictionary(lang);

  const { data, error } = await runQuery((tx) => {
    return tx
      .select()
      .from(products)
      .where(viewArchived === 'true' ? undefined : isNull(products.archivedAt));
  });

  if (error !== null) {
    console.error('product query error', error);

    return null;
  }

  return (
    <div>
      <div className="flex m-4 gap-5">
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
