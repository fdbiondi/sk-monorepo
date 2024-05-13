import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import ProductForm, { Product } from './components/form';

import { getDictionary } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { objectToCamel } from '@/lib/utils';
import { PageProps } from '@/typings';

const Page: React.FC<PageProps> = async ({
  params: { lang, id } = { lang: 'en', id: '' },
}) => {
  const dictionary = await getDictionary(lang);
  let product: Product = {} as Product;
  const supabase = createClient(cookies());

  if (id !== 'new') {
    const { data } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .limit(1);

    if (!data?.[0]) {
      redirect('/products');
    }

    product = objectToCamel(data[0]) as Product;

    if (product.image) {
      const { data: image } = await supabase.storage
        .from('products')
        .createSignedUrl(product.image, 3600);

      product.image = String(image?.signedUrl ?? '');
    } else {
      product.image = '';
    }
  }

  const { data: categories } = await supabase.from('categories').select('*');

  return (
    <div className="grid grid-rows-[auto,2fr,100px] gap-4">
      <div className="flex m-4">
        <p className="text-2xl font-bold tracking-tight">
          {product?.id
            ? dictionary.products.form.modifyTitle
            : dictionary.products.form.createTitle}
        </p>
      </div>

      <div className="flex justify-center">
        <ProductForm
          product={product?.id ? product : undefined}
          dictionary={dictionary}
          categories={categories ?? []}
        />
      </div>
    </div>
  );
};

export default Page;
