import InputWrapper from '@ui/form/input-wrapper/input-wrapper';
import type { FormFieldProps } from '@app-types/form-type';
import styles from './switch.module.css';

export interface SwitchProps extends FormFieldProps<boolean> {
  label?: string;
}

export const Switch = ({ id, label, value, onChange, error, isRequired }: SwitchProps) => {
  return (
    <InputWrapper id={id} label={label} error={error} isRequired={isRequired}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={value}
          onChange={e => onChange?.(e.target.checked)}
          className={styles.input}
        />
        <span className={styles.slider} />
      </label>
    </InputWrapper>
  );
};

export default Switch;
