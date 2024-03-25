import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { Locale, getDictionary } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { objectToCamel } from '@/lib/utils';

import ProductForm, { Product } from './components/form';

type Props = {
  params: {
    lang: Locale;
    productId: string;
  };
};

const Page: React.FC<Props> = async ({ params: { lang, productId } }) => {
  const dictionary = await getDictionary(lang);
  let product: Product = {} as Product;

  if (productId !== 'new') {
    const supabase = createClient(cookies());
    const { data } = await supabase
      .from('products')
      .select('*')
      .eq('id', productId)
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

  return (
    <div className="grid grid-rows-[.25fr,2fr,.5fr] gap-4">
      <div className="flex m-4">
        <p className="text-2xl font-bold tracking-tight">
          {product?.id
            ? dictionary.products.form.createTitle
            : dictionary.products.form.modifyTitle}
        </p>
      </div>

      <div className="flex justify-center">
        <ProductForm
          product={product?.id ? product : undefined}
          dictionary={dictionary}
        />
      </div>
    </div>
  );
};

export default Page;
