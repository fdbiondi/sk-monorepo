import { headers, cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { Locale, getDictionary } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { WithLang } from '@/typings';

type Props = WithLang & {
  searchParams: {
    message?: string;
  };
  params: {
    lang: Locale;
  };
};

const Page: React.FC<Props> = async ({ searchParams, params }) => {
  const dictionary = await getDictionary(params.lang);

  const signIn = async (formData: FormData) => {
    'use server';

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect(`/login?message=${dictionary.auth.signInErrorMessage}`);
    }

    return redirect('/dashboard');
  };

  const signUp = async (formData: FormData) => {
    'use server';

    const origin = headers().get('origin');
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signUp({
      email: email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect(`/login?message=${dictionary.auth.signInErrorMessage}`);
    }

    return redirect(`/login?message=${dictionary.auth.signUpErrorMessage}`);
  };

  return (
    <div className="flex items-center w-full p-8 justify-center">
      <form
        className="animate-in flex-1 flex flex-col w-full sm:max-w-md justify-center gap-2 text-foreground"
        action={signIn}
      >
        <label className="text-md" htmlFor="email">
          {dictionary.auth.email}
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          {dictionary.auth.password}
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="bg-indigo-600 text-white rounded-md px-4 py-2 text-foreground mb-2">
          {dictionary.auth.signIn}
        </button>
        <button
          formAction={signUp}
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
        >
          {dictionary.auth.signUp}
        </button>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Page;
