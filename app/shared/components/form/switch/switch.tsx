import { Switch as AntSwitch } from 'antd';
import InputWrapper from '@ui/form/input-wrapper/input-wrapper';
import type { FormFieldProps } from '@app-types/form-type';

export interface SwitchProps extends FormFieldProps<boolean> {
  label?: string;
}

export const Switch = ({ id, label, value, onChange, error, isRequired }: SwitchProps) => {
  return (
    <InputWrapper id={id} label={label} error={error} isRequired={isRequired}>
      <AntSwitch
        id={id}
        checked={value}
        onChange={checked => onChange?.(checked)}
      />
    </InputWrapper>
  );
};

export default Switch;