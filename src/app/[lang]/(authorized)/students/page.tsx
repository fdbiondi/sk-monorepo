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

import StudentTableRow from './components/StudentTableRow';

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
    <Table>
      <TableHeader className="h-20">
        <TableRow>
          <TableHead className="font-bold text-2xl">
            {dictionary.students.table.caption}
          </TableHead>
          <TableHead>
            <Button asChild>
              <Link href={'/students/new'}>
                {dictionary.students.table.addStudent}
              </Link>
            </Button>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((student) => (
          <StudentTableRow student={student} key={student.id} />
        ))}
      </TableBody>
    </Table>
  );
};

export default Page;
