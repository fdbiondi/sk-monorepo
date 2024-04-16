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
import { Switch } from '@/components/ui/switch';
import useFormAction from '@/hooks/use-from-action';
import { categoryActions } from '@/lib/actions';
import { WithDictionary } from '@/typings';

const Categorieschema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  id: z.string().optional(),
  order: z.coerce.number().optional(),
  isDefault: z.coerce.boolean().optional(),
});

export type Category = z.infer<typeof Categorieschema>;

type Props = {
  category?: Category;
} & WithDictionary;

const CategoryForm: React.FC<Props> = ({ category, dictionary }) => {
  const form = useFormAction<Category>({
    onAction: categoryActions.createOrUpdate,
    resolver: zodResolver(Categorieschema),
    values: category,
    defaultValues: {
      name: '',
      order: 0,
      isDefault: false,
      id: '',
    },
  });

  return (
    <Form {...form}>
      <form className="w-1/2 space-y-4 pt-4" action={form.handleAction}>
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem hidden>
              <FormLabel>{dictionary.categories.table.columns.id}</FormLabel>
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
              <FormLabel>{dictionary.categories.table.columns.name}</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="order"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dictionary.categories.table.columns.order}</FormLabel>
              <FormControl>
                <Input type="number" placeholder="order" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isDefault"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>
                  {dictionary.categories.form.isDefaultTitle}
                </FormLabel>
                <div className="space-y-0.5 flex flex-row items-center justify-between rounded-lg border p-3 shadow-s">
                  <FormDescription>
                    {dictionary.categories.form.isDefaultDescription}
                  </FormDescription>
                  <FormControl>
                    <>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <input
                        type="hidden"
                        {...field}
                        value={field.value ? 'true' : 'false'}
                      />
                    </>
                  </FormControl>
                </div>
              </FormItem>
            );
          }}
        />
        <Button type="submit">{dictionary.form.submit}</Button>
      </form>
    </Form>
  );
};

export default CategoryForm;
