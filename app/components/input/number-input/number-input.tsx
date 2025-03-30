import '../input.css';
import InputWrapper from '../input-wrapper/input-wrapper';
import type { InputProps } from '../app-form-input';

const formatNumber = (value: string): string => {
  // Remove any non-digit characters
  const cleaned = value?.replace(/\D/g, '');
  // Format the number with commas
  return cleaned?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const NumberInput = ({ value, onChange, id, onBlur, error, label }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formattedValue = formatNumber(rawValue);
    onChange?.(formattedValue.replace(/,/g, ''));
  };  
  
  return (
    <InputWrapper id={id} error={error} label={label} value={value}>
      <input
        className="malam-input"
        id={id}
        onBlur={onBlur}
        value={formatNumber(value) || ''}
        type="text"
        placeholder={label}
        onChange={handleChange}
        inputMode="numeric"
        pattern="[0-9]*"
      />
    </InputWrapper>
  );
};

export default NumberInput;
