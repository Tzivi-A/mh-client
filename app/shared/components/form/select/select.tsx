import { Select as AntSelect } from 'antd';
import 'antd/dist/reset.css';
import InputWrapper from '../input-wrapper/input-wrapper';
import type { FormFieldProps } from '@app-types/form-types';
import type { Option } from '@app-types/options';

export interface SelectProps extends FormFieldProps<string> {
  options?: Option[];
  includeEmptyOption?: boolean; // New prop to control whether to include an empty option
  emptyOptionLabel?: string; // Label for the empty option
}

export const Select = ({
  label,
  id,
  options = [],
  disabled,
  onChange,
  value,
  error,
  includeEmptyOption = false, // Default to not including an empty option
  emptyOptionLabel = 'בחר...' // Default label for the empty option
}: SelectProps) => {
  // Add an empty option if `includeEmptyOption` is true
  const enhancedOptions = includeEmptyOption
    ? [{ value: '', label: emptyOptionLabel }, ...options]
    : options;

  return (
    <InputWrapper label={label} id={id} value={value} error={error}>
      <AntSelect
        id={id}
        value={value}
        className="malam-select"
        onChange={onChange}
        showSearch // Enables typing and searching
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        } // Filters options based on user input
        options={enhancedOptions} // Use enhanced options with the empty option
        disabled={disabled}
      />
    </InputWrapper>
  );
};

export default Select;
