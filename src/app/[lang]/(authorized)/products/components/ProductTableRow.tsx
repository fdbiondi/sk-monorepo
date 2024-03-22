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

interface TableRowProps {
  product: {
    id: string;
    name: string;
  };
}

const ProductTableRow: React.FC<TableRowProps> = ({ product }) => {
  return (
    <>
      <TableRow>
        <TableCell>{product.id}</TableCell>
        <TableCell className="text-lg">{product.name}</TableCell>
        <TableCell className="flex gap-1">
          <Button>
            <Link href={`/products/${product.id}`}>Modify</Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Confirm deletion</DialogTitle>
                <DialogDescription>Are you sure?</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose>
                  <Button
                    variant="destructive"
                    onClick={() => productActions.remove(product.id)}
                  >
                    Delete
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
