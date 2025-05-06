import InputWrapper from '../input-wrapper/input-wrapper';
import type { FormFieldProps } from '@app-types/form-types';

export type CheckBoxProps = FormFieldProps<boolean>;

export const CheckBox = ({ id, label, value, onChange, error }: CheckBoxProps) => {
  return (
    <InputWrapper id={id} error={error} label={label}>
      <input
        id={id}
        type="checkbox"
        checked={!!value}
        onChange={e => onChange?.(e.target.checked)}
      />
    </InputWrapper>
  );
};
