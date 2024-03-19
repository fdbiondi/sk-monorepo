'use client';
import { useRouter } from 'next/navigation';

import { TableCell, TableRow } from '@/components/ui/table';

interface TableRowProps {
  product: {
    id: string;
    name: string;
  };
}

const ProductTableRow: React.FC<TableRowProps> = ({ product }) => {
  const router = useRouter();

  return (
    <TableRow
      onClick={() => router.push(`products/${product.id}`)}
      className="cursor-pointer"
    >
      <TableCell>{product.id}</TableCell>
      <TableCell className="text-lg">{product.name}</TableCell>
    </TableRow>
  );
};

export default ProductTableRow;
