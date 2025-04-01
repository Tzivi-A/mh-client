import '../input.css';
import InputWrapper from '../../input-wrapper/input-wrapper';
import type { ReactNode } from 'react';

export interface TextInputProps<T> {
  value: T;
  onChange: (value: T) => void;
  id: string;
  onBlur?: () => void;
  error?: string;
  label?: ReactNode;
}

export const TextInput = ({ value, onChange, id, onBlur, error, label }: TextInputProps<string>) => {
  return (
    <InputWrapper id={id} error={error} label={label} value={value}>
      <input
        className="malam-input"
        id={id}
        onBlur={onBlur}
        value={value || ''}
        type="text"
        onChange={e => onChange?.(e.target.value)}
      />
    </InputWrapper>
  );
};

export default TextInput;
