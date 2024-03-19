import { cookies } from 'next/headers';

import { Locale } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/server';
import { objectToCamel } from '@/lib/utils';

import ProductForm from './components/ProductForm';

type Props = {
  params: {
    lang: Locale;
    productId: string;
  };
};

const Page: React.FC<Props> = async ({ params: { productId } }) => {
  const supabase = createClient(cookies());
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', productId)
    .limit(1);

  if (error) {
    console.error('user error', error);

    return null;
  }

  return (
    <div className="grid grid-rows-[1fr,200px]">
      <div className="flex justify-center">
        <ProductForm product={objectToCamel(data[0])} />
      </div>
    </div>
  );
};

export default Page;
