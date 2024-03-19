'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

const ProductTableHead: React.FC = () => {
  return (
    <div className="flex m-4">
      <p className="font-bold text-2xl flex-1">Products</p>
      <Button>
        <Link href={'products/new'}>New</Link>
      </Button>
    </div>
  );
};

export default ProductTableHead;