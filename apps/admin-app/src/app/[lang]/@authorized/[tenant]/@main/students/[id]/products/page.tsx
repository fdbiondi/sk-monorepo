import { cookies } from 'next/headers';

import StudentProductTiers from './components/student-product-tiers';

import { getDictionary } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { PageProps } from '@/typings';

const Page: React.FC<PageProps> = async ({
  params: { id, lang } = { id: '', lang: 'en' },
}) => {
  const dictionary = await getDictionary(lang);
  const supabase = createClient(cookies());

  const { data: students, error: studentError } = await supabase
    .from('students')
    .select('email, tenant_id')
    .eq('id', id)
    .limit(1);

  if (studentError) {
    console.error('student info error', studentError);

    return null;
  }

  const student = students?.[0];

  const { data: productTiers, error: tiersError } = await supabase
    .from('product_tiers')
    .select(
      `
      id,
      title,
      product:products!inner(
        id,
        name,
        category:categories(
          name
        )
      )
    `
    )
    .eq('product.tenant_id', student?.tenant_id);

  if (tiersError) {
    console.error('tiers error', tiersError);

    return null;
  }

  const { data: studentTiers, error: studentTiersError } = await supabase
    .from('students_product_tiers')
    .select(
      `
      id,
      product_tier_id,
      student_id,
      tier:product_tiers(
        id,
        product_id,
        product:products(
          tenant_id
        )
      )`
    )
    .eq('student_id', id)
    .eq('tier.product.tenant_id', student?.tenant_id);

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
        studentId={id}
        studentTiers={studentTiers}
      />
    </div>
  );
};
export default Page;
