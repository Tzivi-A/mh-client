import '../input.css';
import InputWrapper from '@ui/form/input-wrapper/input-wrapper';
import type { FormFieldProps } from '@app-types/form-types';

export type TextInputProps = FormFieldProps<string>;

export const TextInput = ({ value, onChange, id, onBlur, error, label }: TextInputProps) => {
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
