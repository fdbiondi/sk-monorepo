'use server';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

import { createClient } from '../supabase/server';

export const update = async (formData: FormData) => {
  const name = String(formData.get('name'));
  const id = String(formData.get('id'));
  const supabase = createClient(cookies());
  const payload = { id, name };
  const { error } = await supabase
    .from('products')
    .update(payload)
    .eq('id', id)
    .select();

  if (error) {
    console.error('user error', error);
    // throw error;
  } else {
    revalidatePath('/products');
  }
};

export const create = async (formData: FormData) => {
  const name = formData.get('name');
  const supabase = createClient(cookies());

  // TODO: get tenantId from user
  const { data: tenant, error: getTenantErr } = await supabase
    .from('tenants')
    .select('id');

  if (getTenantErr) {
    console.error('error while retrieving tenantId', getTenantErr);
    // throw error;
  }

  const payload = { name, tenant_id: tenant ? tenant[0].id : null };

  const { error } = await supabase.from('products').insert(payload);

  if (error) {
    console.error('user error', error);
    // throw error;
  } else {
    revalidatePath('/products');
  }
};
