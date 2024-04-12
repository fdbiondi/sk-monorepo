'use client';
import React from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { WithDictionary } from '@/typings';

import { ProductTierValue, updateStudentTiers } from './actions';

type ProductTier = {
  id: string;
  title: string | null;
  product: {
    id: string;
    name: string;
  } | null;
};
type StudentTier = {
  id: string;
  product_tier_id: string;
  student_id: string;
  tier: {
    id: string;
    product_id: string | null;
  } | null;
};

type Props = {
  productTiers: ProductTier[];
  studentTiers: StudentTier[];
  studentId: string;
} & WithDictionary;

function mapTierValues(tiers: StudentTier[]) {
  return tiers
    .filter((t) => typeof t.tier?.product_id === 'string')
    .map((t) => ({
      product_tier_id: t.product_tier_id,
      product_id: String(t.tier?.product_id),
    }));
}

const StudentProductTiers: React.FC<Props> = ({
  productTiers,
  studentTiers,
  studentId,
  dictionary,
}) => {
  const [tiers, setTiers] = React.useState<ProductTierValue[]>([]);

  React.useEffect(() => {
    setTiers(mapTierValues(studentTiers));
  }, [studentTiers]);

  const onSave = async () => {
    try {
      await updateStudentTiers(studentId, tiers, mapTierValues(studentTiers));

      toast.success('Success');
    } catch (e) {
      const error = e as Error;

      toast.error(error.message || 'Something went wrong');
    }
  };

  return (
    <>
      <Table>
        <TableHeader className="h-20">
          <TableRow>
            <TableHead className="w-1/4">Product ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Tier Name</TableHead>
            <TableHead>Add/Remove Product</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productTiers.map((tier) => (
            <TableRow key={tier.id}>
              <TableCell className="text-md"> {tier.product?.id}</TableCell>
              <TableCell className="text-lg"> {tier.product?.name}</TableCell>
              <TableCell className="text-lg">{tier.title}</TableCell>
              <TableCell className="flex gap-1">
                <Switch
                  checked={tiers.some((t) => t.product_tier_id === tier.id)}
                  onCheckedChange={(checked) => {
                    setTiers(
                      checked
                        ? [
                            ...tiers.filter(
                              (t) => t.product_id !== tier.product?.id,
                            ),
                            {
                              product_tier_id: tier.id,
                              product_id: tier.product?.id ?? '',
                            },
                          ]
                        : tiers.filter((t) => t.product_tier_id !== tier.id),
                    );
                  }}
                ></Switch>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="grid grid-cols-4 px-6 space-x-4">
        <Button onClick={onSave}>Save</Button>
      </div>
    </>
  );
};

export default StudentProductTiers;
