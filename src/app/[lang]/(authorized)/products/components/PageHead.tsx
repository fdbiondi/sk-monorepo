'use client';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

const ProductTableHead: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex m-4">
      <p className="font-bold text-2xl flex-1">Products</p>
      <Button onClick={() => router.push('products/new')}>New</Button>
    </div>
  );
};

export default ProductTableHead;
