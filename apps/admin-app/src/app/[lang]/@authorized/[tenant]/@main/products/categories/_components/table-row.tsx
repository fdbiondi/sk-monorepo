'use client';
import { Database } from '@skillstery/supabase';
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
import { categoryActions } from '@/lib/actions';
import { WithDictionary } from '@/typings';

interface TableRowProps extends WithDictionary {
  category: Database['public']['Tables']['categories']['Row'];
}

const CategoryTableRow: React.FC<TableRowProps> = ({
  category,
  dictionary,
}) => {
  return (
    <>
      <TableRow className={category.archived_at ? 'text-slate-700' : ''}>
        <TableCell className="text-lg">{category.order}</TableCell>
        <TableCell>{category.id}</TableCell>
        <TableCell className="text-lg">{category.name}</TableCell>
        <TableCell className="text-lg">
          {category.is_default ? 'Yes' : ''}
        </TableCell>
        <TableCell className="flex gap-1">
          <Button asChild>
            <Link href={`/categories/${category.id}`}>
              {dictionary.crud.edit}
            </Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={category.archived_at ? 'secondary' : 'destructive'}
              >
                {category.archived_at
                  ? dictionary.crud.restore
                  : dictionary.crud.archive}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              {category.is_default ? (
                <DialogHeader>
                  <DialogTitle>
                    {dictionary.categories.form.errorDeleteDefault}
                  </DialogTitle>
                  <DialogDescription>
                    {dictionary.categories.form.errorDeleteDefaultDescription}
                  </DialogDescription>
                  <DialogClose asChild>
                    <Button variant="secondary">{dictionary.form.ok}</Button>
                  </DialogClose>
                </DialogHeader>
              ) : (
                <>
                  <DialogHeader>
                    <DialogTitle>
                      {category.archived_at
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
                        variant={
                          category.archived_at ? 'secondary' : 'destructive'
                        }
                        onClick={() =>
                          category.archived_at
                            ? categoryActions.restore(category.id)
                            : categoryActions.archive(category.id)
                        }
                      >
                        {category.archived_at
                          ? dictionary.crud.restore
                          : dictionary.crud.archive}
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </>
              )}
            </DialogContent>
          </Dialog>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CategoryTableRow;
