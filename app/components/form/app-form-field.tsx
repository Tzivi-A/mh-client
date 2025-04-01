import { TextInput } from './input/text-input/text-input';
import { NumberInput } from './input/number-input/number-input';
import type { AppFormFieldProps } from '~/types/app-form-types';
import { useFieldContext } from '~/hooks/form-context';
import Select from './select/select';
import type { ReactNode } from 'react';
import type { Updater } from '@tanstack/react-form';

export const AppFormField = <T, >({ label, fieldType, ...props }: AppFormFieldProps) => {
  const field = useFieldContext<T>();

  const fields = {
    text: TextInput,
    number: NumberInput,
    select: Select,
    datetime: DatePickerInput,
  };

  const Component = fields[fieldType];

  return (
    <Component
      error={field?.state?.meta?.errors?.join(' ')}
      label={label}
      id={field.name}
      value={field.state.value}
      onChange={(e: Updater<T>) => field.handleChange(e)}
      {...props}
    />
  );
};
