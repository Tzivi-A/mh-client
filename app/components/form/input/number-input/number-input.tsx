import '../input.css';
import InputWrapper from '../../input-wrapper/input-wrapper';
import type { ReactNode } from 'react';

export interface NumberProps<T> {
  value: T;
  onChange: (value: T) => void;
  id: string;
  onBlur?: () => void;
  error?: string;
  label?: ReactNode;
}

export const formatNumber = (value: string): string => {
  // Remove any non-digit characters
  const cleaned = value?.replace(/\D/g, '');
  // Format the number with commas
  return cleaned?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const NumberInput = ({ value, onChange, id, onBlur, error, label }: NumberProps<string>) => {
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
        onChange={handleChange}
        inputMode="numeric"
        pattern="[0-9]*"
      />
    </InputWrapper>
  );
};

export default NumberInput;
