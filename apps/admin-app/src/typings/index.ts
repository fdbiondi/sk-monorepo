import { Dictionary, Locale } from '@/lib/i18n';

interface params {
  lang: Locale;
  tenant: string;
  id: string;
  categoryId: string;
  sections: string;
}

export interface PageProps {
  searchParams?: {
    viewArchived: string;
    message: string;
  };
  params?: params;
}

export interface LayoutProps {
  children?: React.ReactNode;
  params?: params;
}

export interface WithDictionary {
  dictionary: Dictionary;
}
