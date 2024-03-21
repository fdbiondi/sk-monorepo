'use server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

import { Database } from '@/typings/supabase';

import { createClient } from '../supabase/server';

const uploadImage = async (productId: string, file?: File) => {
  if (!file) {
    return { error: null };
  }

  const supabase = createClient(cookies());
  const path = `${productId}/image_${Date.now()}.${file.name.split('.').pop()}`;
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
    throw Error('Could not update product');
  } else {
    revalidatePath('/products');
  }
};

export const create = async (formData: FormData) => {
  const name = String(formData.get('name'));
  const imageFile = formData.has('image')
    ? (formData.get('image') as File)
    : undefined;
  const supabase = createClient(cookies());

  // TODO: get tenantId from user
  const { data: tenant, error: getTenantErr } = await supabase
    .from('tenants')
    .select('id');

  if (getTenantErr || !tenant) {
    throw Error('Could not retrieve tenant id');
  } else {
    const payload = {
      name,
      tenant_id: String(tenant[0].id),
    };

    const { data, error } = await supabase
      .from('products')
      .insert(payload)
      .select('id');

    if (error) {
      throw Error('Could not create product');
    } else {
      revalidatePath('/products');

      const { error: uploadError } = await uploadImage(data[0].id, imageFile);

      if (uploadError) {
        throw uploadError;
      }
    }
  }
};

export const remove = async (
  id: Database['public']['Tables']['products']['Row']['id'],
) => {
  const supabase = createClient(cookies());
  const { error } = await supabase.from('products').delete().eq('id', id);

  if (error) {
    console.error('user error', error);
    // throw error;
  } else {
    revalidatePath('/products');
  }
};
