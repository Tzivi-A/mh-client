import type { FormFieldProps } from '@app-types/form-type';
import styles from './switch.module.css';
import { Flex } from '@ui/layout/flex/flex';
import { useTranslations } from '@hooks/use-translations';

export interface SwitchProps extends FormFieldProps<boolean> {
  label?: string;
}

export const Switch = ({ id, label, value, onChange }: SwitchProps) => {
  const { t } = useTranslations();
  
  return (
    <Flex direction="column">
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
        {label && <span className={styles['switch-label']}>{t(label)}</span>}
      </label>
    </Flex>
  );
};