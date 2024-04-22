'use client';
import { products } from '@skillstery/orm';
import type { InferSelectModel } from 'drizzle-orm';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { TableCell, TableRow } from '@/components/ui/table';
import { productActions } from '@/lib/actions';
import { WithDictionary } from '@/typings';

interface TableRowProps extends WithDictionary {
  product: InferSelectModel<typeof products>;
}

const ProductTableRow: React.FC<TableRowProps> = ({ product, dictionary }) => {
  return (
    <>
      <TableRow className={product.archivedAt ? 'text-slate-700' : ''}>
        <TableCell>{product.id}</TableCell>
        <TableCell className="text-lg">{product.name}</TableCell>
        <TableCell className="flex gap-1">
          <Button asChild>
            <Link href={`/products/${product.id}`}>{dictionary.crud.edit}</Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={product.archivedAt ? 'secondary' : 'destructive'}
              >
                {product.archivedAt
                  ? dictionary.crud.restore
                  : dictionary.crud.archive}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  {product.archivedAt
                    ? dictionary.crud.confirmRestore
                    : dictionary.crud.confirmArchive}
                </DialogTitle>
                <DialogDescription>
                  {dictionary.crud.areYouSure}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    variant={product.archivedAt ? 'secondary' : 'destructive'}
                    onClick={() =>
                      product.archivedAt
                        ? productActions.restore(product.id)
                        : productActions.archive(product.id)
                    }
                  >
                    {product.archivedAt
                      ? dictionary.crud.restore
                      : dictionary.crud.archive}
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ProductTableRow;
