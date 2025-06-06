import '@ui/form/input/input.css';
import InputWrapper from '@ui/form/input-wrapper/input-wrapper';
import type { FormFieldProps } from '@app-types/form-type';
import { formatNumber } from '@utils/number-utils';

export interface NumberProps extends FormFieldProps<string> {
  placeholder?: string;
  min?: number;
  max?: number;
}

export const NumberInput = ({
  value,
  onChange,
  id,
  onBlur,
  error,
  label,
  min,
  max,
  isRequired,
  placeholder
}: NumberProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formattedValue = formatNumber(rawValue);
    onChange?.(formattedValue?.replace(/,/g, ''));
  };

  return (
    <InputWrapper id={id} error={error} label={label} isRequired={isRequired}>
      <input
        max={max}
        min={min}
        className="malam-input"
        id={id}
        onBlur={onBlur}
        value={formatNumber(value) || ''}
        type="text"
        onChange={handleChange}
        inputMode="decimal"
        pattern="^-?[0-9,]*"
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default NumberInput;
