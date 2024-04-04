'use client';
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
import { Database } from '@/typings/supabase';

interface TableRowProps extends WithDictionary {
  product: Database['public']['Tables']['products']['Row'];
}

const ProductTableRow: React.FC<TableRowProps> = ({ product, dictionary }) => {
  return (
    <>
      <TableRow className={product.archived_at ? 'text-slate-700' : ''}>
        <TableCell>{product.id}</TableCell>
        <TableCell className="text-lg">{product.name}</TableCell>
        <TableCell className="flex gap-1">
          <Button asChild>
            <Link href={`/products/${product.id}`}>{dictionary.crud.edit}</Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={product.archived_at ? 'secondary' : 'destructive'}
              >
                {product.archived_at
                  ? dictionary.crud.restore
                  : dictionary.crud.archive}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  {product.archived_at
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
                    variant={product.archived_at ? 'secondary' : 'destructive'}
                    onClick={() =>
                      product.archived_at
                        ? productActions.restore(product.id)
                        : productActions.archive(product.id)
                    }
                  >
                    {product.archived_at
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
