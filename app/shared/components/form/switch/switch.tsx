import type { FormFieldProps } from '@app-types/form-type';
import { CheckBox } from '@ui/form/check-box/check-box';
import styles from './switch.module.css';
import { Flex } from '@ui/layout/flex/flex';

export interface SwitchProps extends FormFieldProps<boolean> {
  label?: string;
}

export const Switch = ({ id, label, value, onChange, error, isRequired }: SwitchProps) => {
  return (
    <Flex direction="column">
      <div className={styles['switch-container']}>
        <CheckBox
          id={id}
          label={label}
          value={value}
          onChange={onChange}
          error={error}
          isRequired={isRequired}
        />
      </div>
    </Flex>
  );
};