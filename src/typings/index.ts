import { Dictionary, Locale } from '@/lib/i18n';

export interface WithLang {
  lang: Locale;
}

export interface PageWithLang {
  params: {
    lang: Locale;
  };
}

export interface WithDictionary {
  dictionary: Dictionary;
}
