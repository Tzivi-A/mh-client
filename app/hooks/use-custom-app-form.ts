import useAppForm from './use-app-form';

interface UseCustomAppFormOptions<TFormValues> {
  defaultValues: TFormValues;
  onSubmit: (data: { value: TFormValues }) => void;
  validators?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange?: (data: { value: TFormValues }) => any;
    onSubmit?: (data: { value: TFormValues }) => string | undefined;
  };
}

function useCustomAppForm<TFormValues>({
  defaultValues,
  onSubmit,
  validators
}: UseCustomAppFormOptions<TFormValues>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useAppForm<TFormValues, any, any, any, any, any, any, any, any, any>({
    defaultValues,
    onSubmit,
    validators // Pass validators to the underlying useAppForm
  });
}

export { useCustomAppForm };
