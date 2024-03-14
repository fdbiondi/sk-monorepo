import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Locale, getDictionary } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { objectToCamel } from '@/lib/utils';

import ChangePasswordDialog from './change-password-dialog';
import StudentForm, { Student } from './form';

type Props = {
  params: {
    lang: Locale;
    studentId: string;
  };
};

const Page: React.FC<Props> = async ({ params: { lang, studentId } }) => {
  const dictionary = await getDictionary(lang);
  const supabase = createClient(cookies());
  const { data } = await supabase
    .from('students')
    .select('*')
    .eq('id', studentId)
    .limit(1);

  if (studentId !== 'new' && !data?.[0]) {
    redirect('/students');
  }

  const student = objectToCamel(data?.[0]);

  return (
    <div className="grid grid-rows-[1fr,200px]">
      <div className="flex justify-center">
        <StudentForm
          student={studentId === 'new' ? undefined : (student as Student)}
        />
      </div>
      <div className="grid grid-cols-4 px-6 space-x-4">
        <Button asChild>
          <Link href={`${studentId}/products`}>
            {dictionary.students.info.actions.manageProducts}
          </Link>
        </Button>

        <ChangePasswordDialog dictionary={dictionary} student={student} />
      </div>
    </div>
  );
};

export default Page;
