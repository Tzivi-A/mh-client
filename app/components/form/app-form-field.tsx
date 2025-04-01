import { TextInput } from './input/text-input/text-input';
import { NumberInput } from './input/number-input/number-input';
import type { AppFormFieldProps } from '~/types/app-form-types';
import { useFieldContext } from '~/hooks/form-context';
import Select from './select/select';
import DatePicker from './date-picker/date-picker';

export const AppFormField = <T, > ({ label, fieldType, ...props }: AppFormFieldProps) => {
  const field = useFieldContext<T>();

  const fields = {
    text: TextInput,
    number: NumberInput,
    select: Select,
    datePicker: DatePicker,
  };

  const Component = fields[fieldType];

  return (
    <Component
      error={field?.state?.meta?.errors?.join(' ')}
      label={label}
      id={field.name}
      value={field.state.value as any}
      onChange={(e: any)=> field.handleChange(e)}
      {...props}
    />
  );
};
