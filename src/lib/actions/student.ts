'use server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { Database } from '@/typings/supabase';

import { cognito } from '../aws';
import { createClient } from '../supabase/server';
import { getUsername } from '../utils';

export const createOrUpdate = async (formData: FormData) => {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const id = formData.get('id');
  const supabase = createClient(cookies());
  const payload = { first_name: firstName, last_name: lastName, email: email };

  if (id) {
    const { data: students, error } = await supabase
      .from('students')
      .update(payload)
      .eq('id', id)
      .select('*');

    if (error) {
      console.error('user error', error);
      throw error;
    }

    revalidatePath(`/students`);

    if (students?.[0] && students[0].sub && students[0].username) {
      await cognito.updateStudent({
        username: students[0].username,
        firstName,
        lastName,
      });
    }
  } else {
    const { data: tenants } = await supabase
      .from('tenants')
      .select('*')
      .limit(1);

    if (!tenants?.[0]) {
      console.error('tenant not found');

      throw new Error('Tenant not found');
    }

    const tenantId = tenants[0].id;

    const { data, error } = await supabase
      .from('students')
      .insert({ ...payload, tenant_id: tenantId })
      .select('*');

    if (data) {
      revalidatePath(`/students`);
      redirect(`/students/${data[0].id}`);
    }

    if (error) {
      console.error('user error', error);
      throw error;
    }
  }
};

export const verifyStudent = async (formData: FormData) => {
  const studentId = formData.get('id') as string;
  const password = formData.get('password') as string;
  const supabase = createClient(cookies());
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .eq('id', studentId);

  if (error) {
    console.error('user error', error);
    throw error;
  }

  if (data?.[0]) {
    const student = data[0];
    const username = getUsername(student.email!, student.tenant_id);

    if (!student.sub) {
      const cognitoStudent = await cognito.createStudent({
        username: username,
        email: student.email!,
        firstName: student.first_name || undefined,
        lastName: student.last_name || undefined,
        tenantId: student.tenant_id,
        password,
        permanent: false,
      });

      const sub = cognitoStudent.User?.Attributes?.find(
        (a) => a.Name === 'sub',
      );

      if (sub) {
        const { error: updateError } = await supabase
          .from('students')
          .update({ sub: sub.Value, username })
          .eq('id', data[0].id);

        if (updateError) {
          console.error('set sub and username error', updateError);
          throw error;
        }
      }
    }

    const _passwordResult = await cognito.setUserPassword({
      username,
      password,
      permanent: false,
    });

    revalidatePath(`/students`);

    return student;
  }
};

export const remove = (
  id: Database['public']['Tables']['students']['Row']['id'],
) => {
  // TODO: implement delete student
  return;
};
