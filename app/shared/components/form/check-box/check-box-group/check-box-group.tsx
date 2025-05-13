import InputWrapper from '@ui/form/input-wrapper/input-wrapper';
import { Flex } from '@ui/layout/flex/flex';
import type { FormFieldProps } from '@app-types/form-type';
import type { Option } from '@app-types/option-type';
import styles from './check-box-group.module.css';
export interface CheckBoxGroupProps extends FormFieldProps<(string | number)[]> {
  options?: Option[];
  flexDirection?: 'row' | 'column';
}

export const CheckBoxGroup = ({
  id,
  label,
  options = [],
  value = [],
  onChange,
  error,
  isRequired,
  flexDirection = 'column'
}: CheckBoxGroupProps) => {
  const handleChange = (checked: boolean, optValue: string | number) => {
    const newValue = checked ? [...value, optValue] : value.filter(v => v !== optValue);
    onChange?.(newValue);
  };

  return (
    <InputWrapper id={id} label={label} error={error} isRequired={isRequired}>
      <div role="group" aria-labelledby={id} className={styles['checkbox-group']}>
        <Flex direction={flexDirection}>
          {options.map(opt => {
            const checkboxId = `${id}-${opt.value}`;
            return (
              <label key={opt.value} htmlFor={checkboxId} className={styles['checkbox-label']}>
                <input
                  type="checkbox"
                  id={opt.value.toString()}
                  name={id}
                  value={opt.value}
                  checked={value.includes(opt.value)}
                  onChange={e => handleChange(e.target.checked, opt.value)}
                  className={styles['checkbox-option']}
                />
                {opt.label}
              </label>
            );
          })}
        </Flex>
      </div>
    </InputWrapper>
  );
};
