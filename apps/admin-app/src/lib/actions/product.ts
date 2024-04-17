'use server';
import { Database } from '@skillstery/supabase';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

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
  const { error } = await supabase
    .from('products')
    .update({ image: path })
    .eq('id', productId)
    .select();

  if (error) {
    throw Error('Failed to save image');
  }
};

const createProductTier = async (productId: string) => {
  const supabase = createClient(cookies());
  const { data, error } = await supabase
    .from('product_tiers')
    .insert({
      product_id: productId,
      title: 'Default',
    })
    .select('id');

  if (error) {
    throw Error('Failed to create tier');
  }

  return data?.[0]?.id ?? null;
};

export const update = async (formData: FormData) => {
  const name = String(formData.get('name'));
  const category_id = String(formData.get('categoryId'));
  const id = String(formData.get('id'));
  const supabase = createClient(cookies());

  const payload = { id, name, category_id };
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

  await Promise.all([
    saveImage(String(data[0].id), formData),
    createProductTier(String(data[0].id)),
  ]);

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

export const archive = async (
  id: Database['public']['Tables']['products']['Row']['id']
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
  id: Database['public']['Tables']['products']['Row']['id']
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
