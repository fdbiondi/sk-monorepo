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
  name: z.string(),
});

type Product = z.infer<typeof ProductSchema>;

const ProductForm: React.FC = () => {
  const product = {
    name: '',
  };
  const form = useFormAction<Product>({
    onAction: productActions.create,
    resolver: zodResolver(ProductSchema),
    values: product,
  });

  return (
    <Form {...form}>
      <form className="w-1/2 flex flex-col gap-4" action={form.handleAction}>
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
