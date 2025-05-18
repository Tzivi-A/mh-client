import type { FormFieldProps } from '@app-types/form-type';
import styles from './switch.module.css';
import { Flex } from '@ui/layout/flex/flex';

export interface SwitchProps extends FormFieldProps<boolean> {
  label?: string;
}

export const Switch = ({ id, label, value, onChange }: SwitchProps) => {
  return (
    <Flex direction="column">
      <label htmlFor={id} className={styles['switch-container']}>
        <input
          type="checkbox"
          id={id}
          checked={value}
          onChange={e => onChange?.(e.target.checked)}
          className={styles.input}
          aria-label={label || 'Toggle switch'}
        />
        <div className={styles.switch}>
          <div className={styles.slider} />
        </div>
        {label && <span className={styles['switch-label']}>{label}</span>}
      </label>
    </Flex>
  );
};