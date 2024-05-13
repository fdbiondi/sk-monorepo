import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Locale, getDictionary } from '@/lib/i18n';

interface Props {
  lang: Locale;
}

const NavigationUpper: React.FC<Props> = async ({ lang }) => {
  const dictionary = await getDictionary(lang);

  return (
    <Link
      href={`home`}
      className="border-b border-gray-700 flex h-12 items-center p-2"
    >
      <ArrowLeft /> <h1 className="text-lg">{dictionary.nav.home}</h1>
    </Link>
  );
};

export default NavigationUpper;
