import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

interface SecondaryLinkProps {
  children: React.ReactNode;
  link: string;
  active?: boolean;
}

const SecondaryLink: React.FC<SecondaryLinkProps> = ({
  children,
  link,
  active,
}) => (
  <Button asChild variant="link" active={active} className="block">
    <Link
      href={link}
      className={`flex items-center gap-2 p-4 ${
        active
          ? 'text-gray-100 shadow-md'
          : 'hover:text-gray-100 hover:shadow-md'
      }`}
    >
      {children}
    </Link>
  </Button>
);

export default SecondaryLink;
