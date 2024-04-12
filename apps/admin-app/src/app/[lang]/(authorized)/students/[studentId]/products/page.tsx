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

  const { data: studentTiers, error: studentTiersError } = await supabase
    .from('students_product_tiers')
    .select(
      `
      tier:product_tiers(
        id,
        title,
        product:products(*)
      )`,
    )
    .eq('student_id', studentId);

  if (studentTiersError) {
    console.error('student tiers error', studentTiersError);

    return null;
  }

  console.log({ tiers: JSON.stringify(studentTiers, null, 2) });

  return (
    <div>
      <div className="flex m-4 gap-5">
        <p className="font-bold text-2xl flex-1">Set Student Products</p>
      </div>
      <StudentProductTiers
        productTiers={productTiers}
        studentTiers={studentTiers}
        dictionary={dictionary}
      />
    </div>
  );
};
export default Page;
