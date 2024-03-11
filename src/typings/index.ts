import { Locale } from '@/lib/i18n';

export interface WithLang {
  lang: Locale;
}

export interface PageWithLang {
  params: {
    lang: Locale;
  };
}
