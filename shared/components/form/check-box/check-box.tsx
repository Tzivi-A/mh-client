import InputWrapper from '../input-wrapper/input-wrapper';
import type { FormFieldProps } from '@app-types/form-types';

export interface CheckBoxProps extends FormFieldProps<boolean> {}

export const CheckBox = ({ id, label, value, onChange, error }: CheckBoxProps) => {
  return (
    <InputWrapper id={id} error={error} label={label} value={null} hasFloatingLabel={false}>
      <input id={id} type="checkbox" checked={value} onChange={e => onChange?.(e.target.checked)} />
    </InputWrapper>
  );
};
