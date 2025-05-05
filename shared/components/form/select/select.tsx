import { useEffect, useState } from 'react';
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
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);

  // Add an empty option if `includeEmptyOption` is true
  const enhancedOptions = includeEmptyOption
    ? [{ value: '', label: emptyOptionLabel }, ...options]
    : options;

  useEffect(() => {
    // When `options` change, clear selection if the selected value is not in the new options
    if (!enhancedOptions.find(option => option.value === selectedValue)) {
      setSelectedValue(undefined);
    }
  }, [enhancedOptions]);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleChange = (newValue: string) => {
    setSelectedValue(newValue);
    onChange?.(newValue);
  };

  return (
    <InputWrapper label={label} id={id} value={value} error={error}>
      <AntSelect
        id={id}
        value={selectedValue}
        className="malam-select"
        onChange={handleChange}
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
