'use server';

// import { Database } from '@skillstery/supabase';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

export type ProductTierValue = {
  product_tier_id: string;
  product_id: string;
};

export async function updateStudentTiers(
  studentId: string,
  newTiers: ProductTierValue[],
  oldTiers: ProductTierValue[] = [],
) {
  const tiersToAdd = newTiers
    .map((tier) => ({
      product_tier_id: tier.product_tier_id,
      student_id: studentId,
    }))
    .filter(
      (newTier) =>
        !oldTiers.some(
          (oldTier) => oldTier.product_tier_id === newTier.product_tier_id,
        ),
    );

  const tiersToRemove = oldTiers.filter(
    (oldTier) =>
      !newTiers.some(
        (newTier) => newTier.product_tier_id === oldTier.product_tier_id,
      ),
  );

  if (tiersToRemove.length > 0) {
    const supabase = createClient(cookies());

    const responses = await Promise.all(
      tiersToRemove.map((tier) => {
        return supabase
          .from('students_product_tiers')
          .delete()
          .eq('student_id', studentId)
          .eq('product_tier_id', tier.product_tier_id);
      }),
    );

    if (responses.some((response) => response.status !== 204)) {
      throw Error('Failed to update student products.');
    }
  }

  if (tiersToAdd.length > 0) {
    const supabase = createClient(cookies());
    const { error } = await supabase
      .from('students_product_tiers')
      .upsert(tiersToAdd)
      .select();

    if (error) {
      throw Error('Failed to update student products.');
    }
  }

  revalidatePath(`/students/${studentId}/products`);
}
