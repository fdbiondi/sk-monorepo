'use client';
import { ShieldCheck, ShieldX } from 'lucide-react';
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
import { studentActions } from '@/lib/actions';
import { WithDictionary } from '@/typings';
import { Database } from '@/typings/supabase';

interface TableRowProps extends WithDictionary {
  student: Database['public']['Tables']['students']['Row'];
}

const StudentTableRow: React.FC<TableRowProps> = ({ student, dictionary }) => {
  return (
    <TableRow className={student.archived_at ? 'text-slate-700' : ''}>
      <TableCell className="align-bottom">{student.id}</TableCell>
      <TableCell className="text-lg">{student.first_name}</TableCell>
      <TableCell className="text-lg">{student.last_name}</TableCell>
      <TableCell className="text-lg">
        {student.sub ? (
          <ShieldCheck className="text-green-500" />
        ) : (
          <ShieldX className="text-red-500" />
        )}
      </TableCell>
      <TableCell className="flex gap-1">
        <Button>
          <Link href={`/students/${student.id}`}>{dictionary.crud.edit}</Link>
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={student.archived_at ? 'secondary' : 'destructive'}>
              {student.archived_at
                ? dictionary.crud.restore
                : dictionary.crud.archive}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {student.archived_at
                  ? dictionary.crud.confirmRestore
                  : dictionary.crud.confirmArchive}
              </DialogTitle>
              <DialogDescription>
                {dictionary.crud.areYouSure}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>
                <Button
                  variant={student.archived_at ? 'secondary' : 'destructive'}
                  onClick={() =>
                    student.archived_at
                      ? studentActions.restore(student.id)
                      : studentActions.archive(student.id)
                  }
                >
                  {student.archived_at
                    ? dictionary.crud.restore
                    : dictionary.crud.archive}
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  );
};

export default StudentTableRow;
