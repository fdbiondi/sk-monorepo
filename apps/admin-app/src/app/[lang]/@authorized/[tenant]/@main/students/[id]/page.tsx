import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import ChangePasswordDialog from './components/change-password-dialog';
import StudentForm, { Student } from './components/form';

import { Button } from '@/components/ui/button';
import { Locale, getDictionary } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { objectToCamel } from '@/lib/utils';
import { PageProps } from '@/typings';

type Props = {
  params: {
    lang: Locale;
    id: string;
  };
};

const Page: React.FC<PageProps> = async ({
  params: { lang, id } = { lang: 'en', id: '' },
}) => {
  const dictionary = await getDictionary(lang);
  let student: Student = {} as Student;

  if (id !== 'new') {
    const supabase = createClient(cookies());
    const { data } = await supabase
      .from('students')
      .select('*')
      .eq('id', id)
      .limit(1);

    if (!data?.[0]) {
      redirect('/students');
    }

    student = objectToCamel(data[0]) as Student;
  }

  return (
    <div className="grid grid-rows-[auto,2fr,100px] gap-4">
      <div className="flex m-4">
        <p className="text-2xl font-bold tracking-tight">
          {student?.id
            ? dictionary.students.form.modifyTitle
            : dictionary.students.form.createTitle}
        </p>
      </div>

      <div className="flex justify-center">
        <StudentForm
          student={student?.id ? student : undefined}
          dictionary={dictionary}
        />
      </div>

      <div className="grid grid-cols-4 px-6 space-x-4">
        <Button asChild>
          <Link href={`${id}/products`}>
            {dictionary.students.info.actions.manageProducts}
          </Link>
        </Button>

        <ChangePasswordDialog dictionary={dictionary} student={student} />
      </div>
    </div>
  );
};

export default Page;
