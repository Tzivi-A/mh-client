import { useEffect, useState } from 'react';
import { Select as AntSelect } from 'antd';
import 'antd/dist/reset.css';
import InputWrapper from '../input-wrapper/input-wrapper';
import type { FormFieldProps } from '@app-types/form-types';
import type { Option } from '@app-types/options';

export interface SelectProps extends FormFieldProps<string> {
  options?: Option[];
}

export const Select = ({ label, id, options = [], onChange, value, error }: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);

  useEffect(() => {
    // When `options` change, clear selection if the selected value is not in the new options
    if (!options.find(option => option.value === selectedValue)) {
      setSelectedValue(undefined);
    }
  }, [options]);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  return (
    <InputWrapper label={label} id={id} value={value} error={error}>
      <AntSelect
        id={id}
        defaultValue={selectedValue}
        className="malam-select"
        onChange={onChange}
        value={selectedValue}
        showSearch // Enables typing and searching
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        } // Filters options based on user input
        options={options} // Pass options directly to Ant Select
      />
    </InputWrapper>
  );
};

export default Select;
