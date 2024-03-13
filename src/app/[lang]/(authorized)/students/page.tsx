import { cookies } from 'next/headers';
import Link from 'next/link';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getDictionary } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { PageWithLang } from '@/typings';

export const revalidate = 0;

const Page: React.FC<PageWithLang> = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);
  const supabase = createClient(cookies());
  const { data, error } = await supabase.from('students').select('*');

  if (error) {
    console.error('user error', error);

    return null;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold text-2xl">
            {dictionary.students.table.caption}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((student) => (
          <TableRow key={student.id}>
            <Link href={`students/${student.id}`}>
              <TableCell className="align-bottom">{student.id}</TableCell>
              <TableCell className="text-lg">{student.first_name}</TableCell>
              <TableCell className="text-lg">{student.last_name}</TableCell>
            </Link>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Page;
