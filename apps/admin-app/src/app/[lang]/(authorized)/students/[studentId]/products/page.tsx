import { cookies } from 'next/headers';

import { getDictionary } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { PageWithLang } from '@/typings';

import StudentProductTiers from './components/student-product-tiers';

const Page: React.FC<
  PageWithLang & { params: { studentId: string } }
> = async ({ params: { studentId, lang } }) => {
  const dictionary = await getDictionary(lang);
  const supabase = createClient(cookies());

  const { data: productTiers, error: tiersError } = await supabase.from(
    'product_tiers',
  ).select(`
      id,
      title,
      product:products(
        id,
        name
      )
    `);

  if (tiersError) {
    console.error('tiers error', tiersError);

    return null;
  }

  const { data: students, error: studentError } = await supabase
    .from('students')
    .select('email')
    .eq('id', studentId)
    .limit(1);

  if (studentError) {
    console.error('student info error', studentError);

    return null;
  }

  const student = students?.[0];

  const { data: studentTiers, error: studentTiersError } = await supabase
    .from('students_product_tiers')
    .select(
      `
      id,
      product_tier_id,
      student_id,
      tier:product_tiers(
        id,
        product_id
      )`,
    )
    .eq('student_id', studentId);

  if (studentTiersError) {
    console.error('student tiers error', studentTiersError);

    return null;
  }

  return (
    <div className="grid grid-rows-[auto,2fr,100px] gap-4">
      <div className="flex m-4 gap-5">
        <p className="font-bold text-2xl flex-1">
          <span>{dictionary.tiers.table.caption}</span>
          <span>&nbsp;</span>
          <span className="font-light">{student.email}</span>
        </p>
      </div>
      <StudentProductTiers
        dictionary={dictionary}
        productTiers={productTiers}
        studentId={studentId}
        studentTiers={studentTiers}
      />
    </div>
  );
};
export default Page;
