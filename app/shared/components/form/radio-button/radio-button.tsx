import InputWrapper from '@ui/form/input-wrapper/input-wrapper';
import type { FormFieldProps } from '@app-types/form-type';
import type { Option } from '@app-types/option-type';
import './radio-button.css';

export interface RadioFieldProps extends FormFieldProps<string | number> {
  options?: Option[];
}

export const RadioButton = ({
  id,
  label,
  options = [],
  value,
  onChange,
  error,
  isRequired
}: RadioFieldProps) => {
  return (
    <InputWrapper id={id} label={label} error={error} isRequired={isRequired}>
      <div role="radiogroup" aria-labelledby={id} className="radio-group">
        {options?.map(opt => {
          const radioId = `${id}-${opt.value}`;
          return (
            <label key={opt.value} htmlFor={radioId} className="radio-label">
              <input
                type="radio"
                id={radioId}
                name={opt.value.toString()}
                value={opt.value}
                checked={value === opt.value}
                onChange={e => onChange?.(e.target.value)}
                className="radio-option"
              />
              {opt.label}
            </label>
          );
        })}
      </div>
    </InputWrapper>
  );
};
