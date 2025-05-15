import type { FormFieldProps } from '@app-types/form-type';
import styles from './switch.module.css';

export interface SwitchProps extends FormFieldProps<boolean> {
  label?: string;
}

export const Switch = ({ id, label, value, onChange }: SwitchProps) => {
  return (
    <div className={styles['switch-wrapper']}>
      <label className={styles['switch-container']}>
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
    </div>
  );
};