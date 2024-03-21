'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useFormAction from '@/hooks/use-from-action';
import { productActions } from '@/lib/actions';

const ProductSchema = z.object({
  name: z.string(),
  image: z.string().optional(),
});

type Product = z.infer<typeof ProductSchema>;

const ProductForm: React.FC = () => {
  const product: Product = {
    name: '',
    image: '',
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

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>image</FormLabel>
              <Input
                placeholder="image"
                accept="image/*"
                type="file"
                {...field}
              />
              <FormMessage />
              <FormDescription>upload product image</FormDescription>
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ProductForm;
