import { cookies } from 'next/headers';

import StudentTableRow from './components/table-row';

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getDictionary } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { PageProps } from '@/typings';

const Page: React.FC<PageProps> = async ({
  params: { lang, tenant } = { lang: 'en', tenant: '' },
  searchParams: { viewArchived } = { viewArchived: 'false' },
}) => {
  const dictionary = await getDictionary(lang);
  const supabase = createClient(cookies());

  const { data, error } =
    viewArchived === 'true'
      ? await supabase
          .from('students')
          .select('*')
          .eq('tenant_id', tenant)
          .order('created_at', { ascending: false })
      : await supabase
          .from('students')
          .select('*')
          .eq('tenant_id', tenant)
          .order('created_at', { ascending: false })
          .is('archived_at', null);

  if (error) {
    console.error('user error', error);

    return null;
  }

  return (
    <div>
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
            <StudentTableRow
              student={student}
              key={student.id}
              dictionary={dictionary}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
