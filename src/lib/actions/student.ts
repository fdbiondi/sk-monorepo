'use server';
import { cookies } from 'next/headers';

import { createClient } from '../supabase/server';

export const update = async (formData: FormData) => {
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const id = formData.get('id');
  const supabase = createClient(cookies());
  const payload = { first_name: firstName, last_name: lastName, email: email };

  const { error } = await supabase
    .from('students')
    .update(payload)
    .eq('id', id);

  if (error) {
    console.error('user error', error);
    // throw error;
  }
};
