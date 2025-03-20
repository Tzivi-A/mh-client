import React, { useState } from 'react';
import { Select as AntSelect } from 'antd';
import 'antd/dist/reset.css';
import './select.css';
import InputWrapper from '../input-wrapper/input-wrapper';

interface SelectProps {
  label: string;
  id: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const Select = ({ label, id, options, defaultValue, onChange }: SelectProps) => {

  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const handleChange = (value: string) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <InputWrapper label={label} id={`${id}`} value={selectedValue} >
      <AntSelect id={id} defaultValue={defaultValue} className="custom-select" onChange={handleChange}>
        {options.map(option => (
          <AntSelect.Option key={option.value} value={option.value}>
            {option.label}
          </AntSelect.Option>
        ))}
      </AntSelect>
    </InputWrapper>
  );
};

export default Select;
