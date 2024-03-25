'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
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
import { productActions } from '@/lib/actions';

const ProductSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  image: z.string().optional(),
  id: z.string().optional(),
});

export type Product = z.infer<typeof ProductSchema>;

type Props = {
  product?: Product;
};

const ProductForm: React.FC<Props> = ({ product }) => {
  const form = useFormAction<Product>({
    onAction: productActions.createOrUpdate,
    resolver: zodResolver(ProductSchema),
    values: product,
    defaultValues: {
      name: '',
      image: '',
      id: '',
    },
  });

  const removeImage = () => {
    if (product) {
      product.image = '';
      form.setValue('image', '');
    }
  };

  return (
    <Form {...form}>
      <form className="w-1/2 space-y-4 pt-4" action={form.handleAction}>
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
              <FormLabel>Name</FormLabel>
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
              <FormLabel>Image</FormLabel>
              {product?.image && (
                <Link
                  className="text-blue-500 underline ml-2 text-sm"
                  href="#"
                  onClick={removeImage}
                >
                  change
                </Link>
              )}

              {product?.image ? (
                <Image
                  className="w-[200px] h-[200px] object-cover rounded-md"
                  src={product.image}
                  width={200}
                  height={200}
                  alt="Product image"
                />
              ) : (
                <Input
                  placeholder="image"
                  accept="image/*"
                  type="file"
                  {...field}
                />
              )}
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
