import type { FormFieldProps } from '@app-types/form-type';
import styles from './switch.module.css';
import { Flex } from '@ui/layout/flex/flex';
import { CheckBox } from '../check-box/check-box';

export interface SwitchProps extends FormFieldProps<boolean> {
  label?: string;
}

export const Switch = ({ id, label, value, onChange }: SwitchProps) => {
  return (
    <Flex direction="column">
      <label className={styles['switch-container']}>
        <CheckBox
          id={id}
          value={value}
          onChange={onChange}
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