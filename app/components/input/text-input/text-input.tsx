import '../input.css';
import InputWrapper from '../input-wrapper/input-wrapper';
import type { InputProps } from '../app-form-input';

export const TextInput = ({ value, onChange, id, onBlur, error, label }: InputProps) => {
  return (
    <InputWrapper id={id} error={error} label={label} value={value}>
      <input
        className="malam-input"
        id={id}
        onBlur={onBlur}
        value={value || ''}
        type="text"
        placeholder={label}
        onChange={e => {
          onChange?.(e.target.value);
        }}
      />
    </InputWrapper>
  );
};

export default TextInput;
