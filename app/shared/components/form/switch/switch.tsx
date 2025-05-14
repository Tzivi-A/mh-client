import InputWrapper from '@ui/form/input-wrapper/input-wrapper';
import type { FormFieldProps } from '@app-types/form-type';
import styles from './switch.module.css';

export interface SwitchProps extends FormFieldProps<boolean> {
  label?: string;
}

export const Switch = ({ id, label, value, onChange, error, isRequired }: SwitchProps) => {
  return (
    <InputWrapper id={id} label={label} error={error} isRequired={isRequired}>
      <div className={styles['switch-container']}>
        <input
          id={`${id}-input`}
          type="checkbox"
          checked={value}
          onChange={e => onChange?.(e.target.checked)}
          className={styles.input}
          aria-label={label}
        />
        <label htmlFor={`${id}-input`} className={styles.switch}>
          <span className={styles.slider} />
          <span className={styles['sr-only']}>{label}</span>
        </label>
      </div>
    </InputWrapper>
  );
};

export default Switch;
