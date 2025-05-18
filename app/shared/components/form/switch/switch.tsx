import type { FormFieldProps } from '@app-types/form-type';
import styles from './switch.module.css';
import { Flex } from '@ui/layout/flex/flex';

export interface SwitchProps extends FormFieldProps<boolean> {
  label?: string;
}

export const Switch = ({ id, label, value, onChange, error, isRequired }: SwitchProps) => {
  return (
    <Flex direction="column">
      <label className={styles['switch-container']} htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          checked={value}
          onChange={e => onChange?.(e.target.checked)}
          className={styles.input}
          aria-label={label}
        />
        <span className={styles.switch}>
          <span className={styles.slider} />
        </span>
        {label && <span className={styles['switch-label']}>{label}</span>}
      </label>
    </Flex>
  );
};