import { cookies } from 'next/headers';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Locale, getDictionary } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { objectToCamel } from '@/lib/utils';

import StudentForm from './form';

type Props = {
  params: {
    lang: Locale;
    studentId: string;
  };
};

const Page: React.FC<Props> = async ({ params: { lang, studentId } }) => {
  const distionary = await getDictionary(lang);
  const supabase = createClient(cookies());
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .eq('id', studentId)
    .limit(1);

  return (
    <div className="grid grid-rows-[1fr,200px]">
      <div className="flex justify-center">
        <StudentForm student={objectToCamel(data[0])} />
      </div>
      <div className="grid grid-cols-2 px-6 w-1/2">
        <Button asChild>
          <Link href={`${studentId}/products`}>
            {distionary.students.info.actions.manageProducts}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
