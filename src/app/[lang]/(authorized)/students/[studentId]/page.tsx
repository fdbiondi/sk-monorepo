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
  let student: Student = {} as Student;

  if (studentId !== 'new') {
    const supabase = createClient(cookies());
    const { data } = await supabase
      .from('students')
      .select('*')
      .eq('id', studentId)
      .limit(1);

    if (!data?.[0]) {
      redirect('/students');
    }

    student = objectToCamel(data[0]) as Student;
  }

  return (
    <div className="grid grid-rows-[.25fr,2fr,.5fr] gap-4">
      <div className="flex m-4">
        <p className="text-2xl font-bold tracking-tight">
          {dictionary.students.form.title}
        </p>
      </div>

      <div className="flex justify-center">
        <StudentForm student={student?.id ? student : undefined} />
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
