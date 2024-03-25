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
      <TableRow>
        <TableCell>{product.id}</TableCell>
        <TableCell className="text-lg">{product.name}</TableCell>
        <TableCell className="flex gap-1">
          <Button asChild>
            <Link href={`/products/${product.id}`}>{dictionary.crud.edit}</Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">{dictionary.crud.delete}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{dictionary.crud.deletion.confirm}</DialogTitle>
                <DialogDescription>
                  {dictionary.crud.areYouSure}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    variant="destructive"
                    onClick={() => productActions.remove(product.id)}
                  >
                    {dictionary.crud.delete}
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
