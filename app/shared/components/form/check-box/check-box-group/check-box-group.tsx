import InputWrapper from '@ui/form/input-wrapper/input-wrapper';
import type { FormFieldProps } from '@app-types/form-type';
import type { Option } from '@app-types/option-type';
import './check-box-group.css';

export interface CheckBoxGroupProps extends FormFieldProps<string[]> {
  options?: Option[];
  isRequired?: boolean;
}

export const CheckBoxGroup = ({
  id,
  label,
  options = [],
  value = [],
  onChange,
  error,
  isRequired = true
}: CheckBoxGroupProps) => {
  const handleChange = (checked: boolean, optValue: string) => {
    const newValue = checked ? [...value, optValue] : value.filter(v => v !== optValue);
    onChange?.(newValue);
  };

  return (
    <InputWrapper id={id} label={label} error={error} isRequired={isRequired}>
      <div role="group" aria-labelledby={id} className="checkbox-group">
        {options.map(opt => {
          const checkboxId = `${id}-${opt.value}`;
          return (
            <label key={opt.value} htmlFor={checkboxId} className="checkbox-label">
              <input
                type="checkbox"
                id={opt.value}
                name={id}
                value={opt.value}
                checked={value.includes(opt.value)}
                onChange={e => handleChange(e.target.checked, opt.value)}
                className="checkbox-option"
              />
              {opt.label}
            </label>
          );
        })}
      </div>
    </InputWrapper>
  );
};
