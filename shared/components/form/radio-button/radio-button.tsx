import InputWrapper from '../input-wrapper/input-wrapper';
import type { FormFieldProps } from '@app-types/form-types';
import type { Option } from '@app-types/options';
import './radio-button.css';

export interface RadioFieldProps extends FormFieldProps<string> {
  options?: Option[];
}

export const RadioButton = ({
  id,
  label,
  options = [],
  value,
  onChange,
  error
}: RadioFieldProps) => {
  return (
    <InputWrapper id={id} label={label} value={value} error={error} hasFloatingLabel={false}>
      <div role="radiogroup" aria-labelledby={id} className="radio-group">
        {options?.map((opt, index) => {
          const radioId = `${id}-${index}`;
          return (
            <label key={opt.value} htmlFor={radioId} className="radio-label">
              <input
                type="radio"
                id={radioId}
                name={radioId}
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
