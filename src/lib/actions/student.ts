'use server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { cognito } from '../aws';
import { createClient } from '../supabase/server';

export const createOrUpdate = async (formData: FormData) => {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const id = formData.get('id');
  const supabase = createClient(cookies());
  const payload = { first_name: firstName, last_name: lastName, email: email };

  if (id) {
    const { error } = await supabase
      .from('students')
      .update(payload)
      .eq('id', id);

    revalidatePath(`/students`);

    if (error) {
      console.error('user error', error);
      // throw error;
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
      // throw error;
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

    if (!student.sub) {
      const cognitoStudent = await cognito.createStudent({
        email: student.email,
        firstName: student.first_name,
        lastName: student.last_name,
        tenantId: student.tenant_id,
        password,
        permanent: false,
      });

      console.log('cognitoStudent', cognitoStudent.User?.Attributes);

      const sub = cognitoStudent.User?.Attributes?.find(
        (a) => a.Name === 'sub',
      );

      if (sub) {
        await supabase
          .from('students')
          .update({ sub: sub.Value })
          .eq('id', data[0].id);
      }
    }

    const _passwordResult = await cognito.setUserPassword({
      email: student.email,
      tenantId: student.tenant_id,
      password,
      permanent: false,
    });

    revalidatePath(`/students`);

    return student;
  }
};
