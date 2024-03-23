import { cookies } from 'next/headers';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getDictionary } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { PageWithLang } from '@/typings';

import StudentTableRow from './components/table-row';

const Page: React.FC<PageWithLang> = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);
  const supabase = createClient(cookies());
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('user error', error);

    return null;
  }

  return (
    <div>
      <div className="flex m-4">
        <p className="font-bold text-2xl flex-1">
          {dictionary.students.table.caption}
        </p>
        <Button asChild>
          <Link href={'/students/new'}>{dictionary.students.table.add}</Link>
        </Button>
      </div>

      <Table>
        <TableHeader className="h-20">
          <TableRow>
            <TableHead>{dictionary.students.table.columns.id}</TableHead>
            <TableHead>{dictionary.students.table.columns.firstName}</TableHead>
            <TableHead>{dictionary.students.table.columns.lastName}</TableHead>
            <TableHead>{dictionary.students.table.columns.verified}</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((student) => (
            <StudentTableRow student={student} key={student.id} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
