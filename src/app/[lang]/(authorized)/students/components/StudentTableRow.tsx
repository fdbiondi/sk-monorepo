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
import { Database } from '@/typings/supabase';

interface TableRowProps {
  student: Database['public']['Tables']['students']['Row'];
}

const StudentTableRow: React.FC<TableRowProps> = ({ student }) => {
  return (
    <TableRow key={student.id}>
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
          <Link href={`/students/${student.id}`}>Modify</Link>
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
                  onClick={() => studentActions.remove(student.id)}
                >
                  Delete
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
