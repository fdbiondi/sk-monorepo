'use server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { Database } from '@/typings/supabase';

import { createClient } from '../supabase/server';

export const update = async (formData: FormData) => {
  const is_default = Boolean(formData.get('isDefault') === 'true');
  if (formData.get('isDefault') && !is_default) {
    throw Error('There must be a default category');
  }

  const name = String(formData.get('name'));
  const order = Number(formData.get('order'));
  const payload = { name, order, is_default };
  const id = String(formData.get('id'));
  const supabase = createClient(cookies());
  const { error } = await supabase
    .from('categories')
    .update(payload)
    .eq('id', id)
    .select();

  if (error) {
    throw Error('Failed to update category');
  }

  revalidatePath('/categories');
};

export const create = async (formData: FormData) => {
  const name = String(formData.get('name'));
  const order = Number(formData.get('order'));
  const is_default = Boolean(formData.get('isDefault') === 'true');
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
    order,
    is_default,
    tenant_id: String(tenant[0].id),
  };
  const { data, error } = await supabase
    .from('categories')
    .insert(payload)
    .select('id');

  if (error) {
    throw Error('Failed to create category');
  }

  if (data) {
    revalidatePath(`/categories`);
    redirect(`/categories/${data[0].id}`);
  }
};

export const createOrUpdate = async (formData: FormData) => {
  const id = formData.get('id');

  if (formData.get('isDefault') === 'true') {
    const supabase = createClient(cookies());
    const { error } = await supabase
      .from('categories')
      .update({ is_default: false })
      .eq('is_default', true);

    if (error) {
      throw Error('Failed to update category');
    }
  }

  if (id) {
    await update(formData);
  } else {
    await create(formData);
  }
};

// TODO use soft delete
export const archive = async (
  id: Database['public']['Tables']['categories']['Row']['id'],
) => {
  const supabase = createClient(cookies());
  const { error } = await supabase
    .from('categories')
    .update({
      archived_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select();

  if (error) {
    throw Error('Failed to archive category');
  }

  revalidatePath('/categories');
};

export const restore = async (
  id: Database['public']['Tables']['categories']['Row']['id'],
) => {
  const supabase = createClient(cookies());
  const { error } = await supabase
    .from('categories')
    .update({
      archived_at: null,
    })
    .eq('id', id)
    .select();

  if (error) {
    throw Error('Failed to archive category');
  }

  revalidatePath('/categories');
};
