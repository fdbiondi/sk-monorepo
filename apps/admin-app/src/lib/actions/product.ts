'use server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { Database } from '@/typings/supabase';

import { createClient } from '../supabase/server';


const uploadImage = async (productId: string, file?: File | null) => {
  if (!file) {
    return null;
  }

  const path = `${productId}/image_${Date.now()}.${file.name.split('.').pop()}`;
  const supabase = createClient(cookies());

  const { data, error } = await supabase.storage
    .from('products')
    .upload(path, file);

  if (error) {
    throw Error('Failed to upload image');
  }

  return data?.path ?? null;
};

const saveImage = async (productId: string, formData: FormData) => {
  const image =
    formData.has('image') && (formData.get('image') as File).size > 0
      ? (formData.get('image') as File)
      : null;

  const path = await uploadImage(productId, image);

  if (!path) {
    return;
  }

  const supabase = createClient(cookies());
  const { error: updateError } = await supabase
    .from('products')
    .update({ image: path })
    .eq('id', productId)
    .select();

  if (updateError) {
    throw Error('Failed to save image');
  }
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

  await saveImage(id, formData);

  revalidatePath('/products');
};

export const create = async (formData: FormData) => {
  const name = String(formData.get('name'));
  const supabase = createClient(cookies());
  // TODO: get tenant from user
  const { data: tenant, error: tenantErr } = await supabase
    .from('tenants')
    .select('id')
    .limit(1);

  if (tenantErr) {
    throw Error('Tenant not found');
  }

  const { data: category, error: categoryError } = await supabase
    .from('categories')
    .select('id')
    .eq('tenant_id', tenant[0].id)
    .limit(1);

  if (categoryError) {
    throw Error('Category not found');
  }

  const payload = {
    name,
    tenant_id: String(tenant[0].id),
    category_id: String(category[0].id),
  };

  const { data, error } = await supabase
    .from('products')
    .insert(payload)
    .select('id');

  if (error) {
    throw Error('Failed to create product');
  }

  await saveImage(String(data[0].id), formData);

  if (data) {
    revalidatePath(`/products`);
    redirect(`/products/${data[0].id}`);
  }
};

export const createOrUpdate = async (formData: FormData) => {
  const id = formData.get('id');

  if (id) {
    await update(formData);
  } else {
    await create(formData);
  }
};

// TODO use soft delete
export const archive = async (
  id: Database['public']['Tables']['products']['Row']['id'],
) => {
  const supabase = createClient(cookies());
  const { error } = await supabase
    .from('products')
    .update({
      archived_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select();

  if (error) {
    throw Error('Failed to archive product');
  }

  revalidatePath('/products');
};

export const restore = async (
  id: Database['public']['Tables']['products']['Row']['id'],
) => {
  const supabase = createClient(cookies());
  const { error } = await supabase
    .from('products')
    .update({
      archived_at: null,
    })
    .eq('id', id)
    .select();

  if (error) {
    throw Error('Failed to archive product');
  }

  revalidatePath('/products');
};
