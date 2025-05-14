/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextInput } from './input/text-input/text-input';
import { NumberInput } from './input/number-input/number-input';
import type { AppFormFieldProps } from '@app-types/app-form-type';
import Select from './select/select';
import DatePicker from './date-picker/date-picker';
import { CheckBox } from './check-box/check-box';
import { CheckBoxGroup } from './check-box/check-box-group/check-box-group';
import { RadioButton } from './radio-button/radio-button';
import { Switch } from './switch/switch';
import { useFieldContext } from '@hooks/use-app-form';

export const AppFormField = <T,>({ label, fieldType, ...props }: AppFormFieldProps) => {
  const field = useFieldContext<T>();

  const fields = {
    text: TextInput,
    number: NumberInput,
    select: Select,
    datePicker: DatePicker,
    checkBox: CheckBox,
    checkBoxGroup: CheckBoxGroup,
    radioButton: RadioButton,
    switch: Switch
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