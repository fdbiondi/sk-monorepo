'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Database } from '@skillstery/supabase';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useFormAction from '@/hooks/use-from-action';
import { productActions } from '@/lib/actions';
import { WithDictionary } from '@/typings';

const ProductSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  image: z.string().optional(),
  id: z.string().optional(),
  categoryId: z.string().optional(),
});

export type Product = z.infer<typeof ProductSchema>;

type Props = {
  product?: Product;
  categories: Database['public']['Tables']['categories']['Row'][];
} & WithDictionary;

const ProductForm: React.FC<Props> = ({ product, dictionary, categories }) => {
  const form = useFormAction<Product>({
    onAction: productActions.createOrUpdate,
    resolver: zodResolver(ProductSchema),
    values: product,
    defaultValues: {
      name: '',
      image: '',
      id: '',
      categoryId: categories.find((c) => c.is_default)?.id,
    },
  });

  const categoriesList = categories.map((category) => ({
    value: category.id,
    label: (category.is_default ? '(default) Current: ' : '') + category.name,
  }));

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
              <FormLabel>{dictionary.products.table.columns.id}</FormLabel>
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
              <FormLabel>{dictionary.products.table.columns.name}</FormLabel>
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
              <FormLabel>{dictionary.products.table.columns.image}</FormLabel>
              {product?.image && (
                <Link
                  className="text-blue-500 underline ml-2 text-sm"
                  href="#"
                  onClick={removeImage}
                >
                  {dictionary.form.change}
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

        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} {...field}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        dictionary.products.form.categoriesPlaceholder
                      }
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categoriesList.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input type="hidden" {...field} />
            </FormItem>
          )}
        />

        <Button type="submit">{dictionary.form.submit}</Button>
      </form>
    </Form>
  );
};

export default ProductForm;
