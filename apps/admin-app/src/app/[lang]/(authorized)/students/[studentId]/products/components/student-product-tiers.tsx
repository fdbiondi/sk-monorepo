import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Props = {
  productTiers: any;
  studentTiers: any;
} & WithDictionary;

const StudentProductTiers: React.FC<Props> = ({
  productTiers,
  studentTiers,
  dictionary,
}) => {
  return (
    <Table>
      <TableHeader className="h-20">
        <TableRow>
          <TableHead className="w-1/4">Product ID</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Tier Name</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {productTiers.map((tier) => (
          <TableRow key={tier.id}>
            <TableCell className="text-md"> {tier.product?.id}</TableCell>
            <TableCell className="text-lg"> {tier.product?.name}</TableCell>
            <TableCell className="text-lg">{tier.title}</TableCell>
            <TableCell className="flex gap-1">
              <Button>Add</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentProductTiers;
