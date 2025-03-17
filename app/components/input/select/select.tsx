import React, { useState } from 'react';
import { Select } from 'antd';
import 'antd/dist/reset.css';
import './select.css';
import InputWrapper from '../input-wrapper/input-wrapper';

interface SelectProps {
  label: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const MHSelect = ({ label, options, defaultValue, onChange }: SelectProps) => {
  const [isFocused, setIsFocused] = useState(!!defaultValue);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!selectedValue) setIsFocused(false);
  };
  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <InputWrapper label="ערים">
      <Select
        defaultValue={defaultValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="custom-select"
        style={{ width: '100%' }}
      >
        {options.map(option => (
          <Select.Option key={option.value} value={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </InputWrapper>
  );
};

export default MHSelect;
