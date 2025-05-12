import '@ui/form/input/input.css';
import InputWrapper from '@ui/form/input-wrapper/input-wrapper';
import type { FormFieldProps } from '@app-types/form-type';

export interface TextInputProps extends FormFieldProps<string> {
  placeholder?: string;
}
export const TextInput = ({
  value,
  onChange,
  id,
  onBlur,
  error,
  label,
  isRequired,
  placeholder
}: TextInputProps) => {
  return (
    <InputWrapper id={id} error={error} label={label} isRequired={isRequired}>
      <input
        className="malam-input"
        id={id}
        onBlur={onBlur}
        value={value || ''}
        type="text"
        onChange={e => onChange?.(e.target.value)}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default TextInput;
