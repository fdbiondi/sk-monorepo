import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const ToCamel = (str: string) =>
  str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace('-', '').replace('_', ''),
    );

export const objectToCamel = <T>(obj: Record<string, unknown>): T => {
  const newObj: Record<string, unknown> = {};

  for (const key in obj) {
    newObj[ToCamel(key)] = obj[key];
  }

  return newObj as T;
};
