import '../input.css';
import InputWrapper from '../../input-wrapper/input-wrapper';
import type { FormFieldProps } from '~/types/form-types';

export interface NumberProps extends FormFieldProps<string> {
  min?: number;
  max?: number;
}

export const formatNumber = (value?: string): string => {
  // Allow a leading minus sign and remove any non-digit characters except for commas
  const cleaned = value?.replace(/[^0-9,-]/g, '');

  const isNegative = cleaned?.startsWith('-');
  const digits = cleaned?.replace(/-/g, '').replace(/^0+(?=\d)/, '');

  // Format the number with commas
  const formatted = digits?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  return isNegative ? `-${formatted}` : formatted || '';
};

export const NumberInput = ({ value, onChange, id, onBlur, error, label, min, max }: NumberProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formattedValue = formatNumber(rawValue);
    onChange?.(formattedValue?.replace(/,/g, ''));
  };  
  
  return (
    <InputWrapper id={id} error={error} label={label} value={value}>
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
      />
    </InputWrapper>
  );
};

export default NumberInput;
