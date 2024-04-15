import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { Locale, getDictionary } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { objectToCamel } from '@/lib/utils';

import CategoryForm, { Category } from './components/form';

type Props = {
  params: {
    lang: Locale;
    categoryId: string;
  };
};

const Page: React.FC<Props> = async ({ params: { lang, categoryId } }) => {
  const dictionary = await getDictionary(lang);
  let category: Category = {} as Category;
  const supabase = createClient(cookies());

  if (categoryId !== 'new') {
    const { data } = await supabase
      .from('categories')
      .select('*')
      .eq('id', categoryId)
      .limit(1);

    if (!data?.[0]) {
      redirect('/categories');
    }

    category = objectToCamel(data[0]) as Category;
  }

  return (
    <div className="grid grid-rows-[.25fr,2fr,.5fr] gap-4">
      <div className="flex m-4">
        <p className="text-2xl font-bold tracking-tight">
          {category?.id
            ? dictionary.categories.form.modifyTitle
            : dictionary.categories.form.createTitle}
        </p>
      </div>

      <div className="flex justify-center">
        <CategoryForm
          category={category?.id ? category : undefined}
          dictionary={dictionary}
        />
      </div>
    </div>
  );
};

export default Page;
