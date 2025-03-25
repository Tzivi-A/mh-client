import '../input.css';
import InputWrapper from '../input-wrapper/input-wrapper';
export interface TextInputProps {
  value: string;
  onChange?: (value: string) => void;
  id: string;
  onBlur?: () => void;
  error?: string;
  label?: string;
}

export const TextInput = ({ value, onChange, id, onBlur, error, label }: TextInputProps) => {
  return (
    <InputWrapper id={id} error={error} label={label} value={value}>
      <input
        id={id}
        onBlur={onBlur}
        value={value}
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
