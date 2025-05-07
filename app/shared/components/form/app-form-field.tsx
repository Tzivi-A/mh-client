/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextInput } from './input/text-input/text-input';
import { NumberInput } from './input/number-input/number-input';
import type { AppFormFieldProps } from '@app-types/app-form-types';
import Select from './select/select';
import DatePicker from './date-picker/date-picker';
import { CheckBox } from './check-box/check-box';
import { RadioButton } from './radio-button/radio-button';
import { useFieldContext } from '@hooks/use-app-form';

export const AppFormField = <T,>({ label, fieldType, ...props }: AppFormFieldProps) => {
  const field = useFieldContext<T>();

  const fields = {
    text: TextInput,
    number: NumberInput,
    select: Select,
    datePicker: DatePicker,
    checkBox: CheckBox,
    radioButton: RadioButton
  };

  const Component = fields[fieldType];

  return (
    <Component
      error={field?.state?.meta?.errors?.join(' ')}
      label={label}
      id={field.name}
      value={field.state.value as any}
      onChange={(e: any) => field.handleChange(e)}
      {...props}
    />
  );
};
