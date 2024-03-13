'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useFormAction from '@/hooks/use-from-action';
import { product as productActions } from '@/lib/actions';

const ProductSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
});

type Product = z.infer<typeof ProductSchema>;

type Props = {
  product: Product;
};

const ProductForm: React.FC<Props> = ({ product }) => {
  const form = useFormAction<Product>({
    onAction: productActions.update,
    resolver: zodResolver(ProductSchema),
    values: product,
  });

  return (
    <Form {...form}>
      <form className="w-1/2 flex flex-col gap-4" action={form.handleAction}>
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem hidden>
              <FormLabel>Id</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ProductForm;
