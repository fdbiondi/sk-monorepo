'use client';

import { Home, Package, UsersRound } from 'lucide-react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

const PrimaryNavLinks = () => {
  const pathname = usePathname();
  const tenant = useParams().tenant as string;
  const section = pathname.split('/')[3];

  return (
    <>
      <Link
        href={`/${tenant}/home`}
        className="flex items-center gap-2 p-4 hover:text-gray-100 hover:shadow-md"
      >
        <Home size={28} strokeWidth={1.5} />
      </Link>
      <Link
        href={`/${tenant}/products`}
        className={`flex items-center gap-2 p-4 ${
          section === 'products'
            ? 'text-gray-100 shadow-md'
            : 'hover:text-gray-100 hover:shadow-md'
        }`}
      >
        <Package size={28} strokeWidth={1.5} />
      </Link>
      <Link
        href={`/${tenant}/students`}
        className={`flex items-center gap-2 p-4 ${
          section === 'students'
            ? 'text-gray-100 shadow-md'
            : 'hover:text-gray-100 hover:shadow-md'
        }`}
      >
        <UsersRound size={28} strokeWidth={1.5} />
      </Link>{' '}
    </>
  );
};

export default PrimaryNavLinks;
