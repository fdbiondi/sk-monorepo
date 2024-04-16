/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo } from 'react';
import { type FieldValues, type UseFormProps, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type UseFormActionProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> = UseFormProps<TFieldValues, TContext> & {
  onAction(data: FormData): void;
  successMessage?: string;
  onSuccess?(): void;
};

/**
 * Hook for managing form actions and validations.
 * @template TFieldValues - Type for field values.
 * @template TContext - Type for additional context.
 * @param {UseFormActionProps<TFieldValues, TContext>} props - Props for useFormAction hook.
 * @returns {{
 *   ...UseFormProps<TFieldValues, TContext>,
 *   handleAction: (onAction: (payload: FormData) => void) => (payload: FormData) => Promise<void>
 * }} An object containing form methods and a handleAction function.
 * @example
 * const form = useFormAction<z.infer<typeof formSchema>>({
 *   defaultValues: initialFormValues,
 *   resolver: zodResolver(formSchema),
 *   onAction: serverHandler,
 * });
 *
 * <form action={form.handleAction}></form>
 */
const useFormAction = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
>(
  props: UseFormActionProps<TFieldValues, TContext>
) => {
  const { onAction, successMessage = 'Success', onSuccess } = props;

  /**
   * Returns the form object with provided props.
   * @type {UseFormProps<TFieldValues, TContext>}
   */
  const form = useForm(props);

  /**
   * Handles form action, triggers form validation, and executes the provided action if form is valid.
   * @param {Function} onAction - Function to execute on form action.
   * @returns {Promise<void>} A promise resolving after action execution.
   */
  const handleAction = useCallback(
    async (payload: FormData) => {
      /**
       * Trigger form validation.
       * @type {boolean}
       */
      const isValid = await form.trigger();

      if (isValid) {
        try {
          await onAction(payload);

          onSuccess?.();
          toast.success(successMessage);
        } catch (e) {
          const error = e as Error;

          toast.error(error.message || 'Something went wrong');
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [form.trigger, onAction]
  );

  return useMemo(
    () => ({
      ...form,
      handleAction,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(form), handleAction]
  );
};

export default useFormAction;
