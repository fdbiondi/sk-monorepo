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
import { studentActions } from '@/lib/actions';
import { WithDictionary } from '@/typings';

const StudentSchema = z.object({
  firstName: z.string().min(1, { message: 'Required' }),
  lastName: z.string().min(1, { message: 'Required' }),
  email: z.string().email(),
  id: z.string().optional(),
  sub: z.string().nullable(),
});

export type Student = z.infer<typeof StudentSchema>;

type Props = {
  student?: Student;
} & WithDictionary;

const StudentForm: React.FC<Props> = ({ student, dictionary }) => {
  const form = useFormAction<Student>({
    onAction: studentActions.createOrUpdate,
    resolver: zodResolver(StudentSchema),
    values: student,
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
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
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {dictionary.students.table.columns.firstName}
              </FormLabel>
              <FormControl>
                <Input placeholder="First name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {dictionary.students.table.columns.lastName}
              </FormLabel>
              <FormControl>
                <Input placeholder="Last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dictionary.students.table.columns.email}</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{dictionary.form.submit}</Button>
      </form>
    </Form>
  );
};

export default StudentForm;
