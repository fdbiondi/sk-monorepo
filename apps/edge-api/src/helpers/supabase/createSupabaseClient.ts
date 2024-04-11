import { createClient } from "@supabase/supabase-js";

export function createSupabaseClient(token?: string) {
  const supabase = createClient(
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

  return supabase;
}
