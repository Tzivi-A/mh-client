import InputWrapper from '@ui/form/input-wrapper/input-wrapper';
import type { FormFieldProps } from '@app-types/form-type';

export type CheckBoxProps = FormFieldProps<boolean>;

export const CheckBox = ({ id, label, value, onChange, error, isRequired }: CheckBoxProps) => {
  return (
    <InputWrapper id={id} error={error} label={label} isRequired={isRequired}>
      <input
        id={id}
        type="checkbox"
        checked={!!value}
        onChange={e => onChange?.(e.target.checked)}
      />
    </InputWrapper>
  );
};
