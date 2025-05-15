import type { FormFieldProps } from '@app-types/form-type';
import styles from './switch.module.css';

export interface SwitchProps extends FormFieldProps<boolean> {
  label?: string;
}

export const Switch = ({ id, label, value, onChange }: SwitchProps) => {
  return (
    <div className={styles['switch-wrapper']}>
      {label && (
        <label htmlFor={id} className={styles['switch-label']}>
          {label}
        </label>
      )}
      <label className={styles.switch}>
        <input
          type="checkbox"
          id={id}
          checked={value}
          onChange={e => onChange?.(e.target.checked)}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};