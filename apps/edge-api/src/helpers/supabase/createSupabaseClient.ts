import { Database } from '@skillstery/supabase';
import { createClient } from '@supabase/supabase-js';

export function createSupabaseClient(token?: string) {
  return createClient<Database>(
    String(globalThis.SUPABASE_PUBLIC_URL),
    String(globalThis.SUPABASE_PUBLIC_ANON_KEY),
    {
      global:
        token !== undefined
          ? {
              headers: {
                Authorization: `Bearer ${token}`,
                // apikey: String(globalThis.SUPABASE_PUBLIC_ANON_KEY),
              },
            }
          : undefined,
    }
  );
}
