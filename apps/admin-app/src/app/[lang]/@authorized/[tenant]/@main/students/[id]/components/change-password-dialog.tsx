'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useFormAction from '@/hooks/use-from-action';
import { studentActions } from '@/lib/actions';
import { WithDictionary } from '@/typings';

// TODO use generated types from supabase
import { Student } from './form';

const VerifyStudentSchema = z.object({
  id: z.string().uuid(),
  password: z.string().min(8),
  permanent: z.boolean().default(false),
});

type VerifyStudentInputs = z.infer<typeof VerifyStudentSchema>;

type Props = {
  student: Student;
} & WithDictionary;

const ChangePasswordDialog: React.FC<Props> = ({ student, dictionary }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const form = useFormAction<VerifyStudentInputs>({
    onAction: studentActions.verifyStudent,
    resolver: zodResolver(VerifyStudentSchema),
    values: {
      id: student.id ?? '',
      password: '',
      permanent: false,
    },
    onSuccess: () => {
      closeRef.current?.click();
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          {student.sub
            ? dictionary.students.info.actions.changePassword
            : dictionary.students.info.actions.verify}
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {student.sub
              ? dictionary.students.info.changePasswordForm.changePasswordTitle
              : dictionary.students.info.changePasswordForm.verifyTitle}
          </DialogTitle>
          <DialogDescription>
            {dictionary.students.info.changePasswordForm.description}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-4 pt-4" action={form.handleAction}>
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose ref={closeRef} hidden />
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {dictionary.form.submit}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordDialog;
