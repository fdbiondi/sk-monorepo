'use server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

import { Database } from '@/typings/supabase';

import { createClient } from '../supabase/server';

const uploadImage = async (productId: string, file?: File) => {
  if (!file) {
    return { error: null };
  }

  const path = `${productId}/image_${Date.now()}.${file.name.split('.').pop()}`;
  const supabase = createClient(cookies());

  const { data, error } = await supabase.storage
    .from('products')
    .upload(path, file);

  if (error || !data) {
    return { error };
  }

  const { error: updateError } = await supabase
    .from('products')
    .update({ image: data.path })
    .eq('id', productId)
    .select();

  if (updateError) {
    return { error: updateError };
  }

  return { error: null };
};

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
    throw Error('Failed to update product');
  }

  revalidatePath('/products');
};

export const create = async (formData: FormData) => {
  const name = String(formData.get('name'));
  const imageFile = formData.has('image')
    ? (formData.get('image') as File)
    : undefined;

  console.log(formData.get('image'));

  const supabase = createClient(cookies());
  // TODO: get tenant from user
  const { data: tenant, error: tenantErr } = await supabase
    .from('tenants')
    .select('id')
    .limit(1);

  if (tenantErr) {
    throw Error('Tenant not found');
  }

  const payload = {
    name,
    tenant_id: String(tenant[0].id),
  };

  const { data, error } = await supabase
    .from('products')
    .insert(payload)
    .select('id');

  if (error) {
    throw Error('Failed to create product');
  }

  revalidatePath('/products');

  const { error: uploadError } = await uploadImage(data[0].id, imageFile);

  if (uploadError) {
    throw uploadError;
  }
};

export const remove = async (
  id: Database['public']['Tables']['products']['Row']['id'],
) => {
  const supabase = createClient(cookies());
  const { error } = await supabase.from('products').delete().eq('id', id);

  if (error) {
    throw Error('Failed to delete product');
  }

  revalidatePath('/products');
};
