import { authDB } from '@skillstery/orm';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { cookies } from 'next/headers';

import { createClient } from '@/lib/supabase/server';

export async function runQuery<T>(
  cb: (sql: PostgresJsDatabase) => T | Promise<T>
) {
  const supabaseClient = createClient(cookies());
  const {
    data: { session },
  } = await supabaseClient.auth.getSession();

  if (!session) {
    return { data: null, error: new Error('Not authenticated') };
  }

  try {
    const data = await authDB(session, cb);

    return { data, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}
