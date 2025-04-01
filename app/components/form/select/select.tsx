import { Select as AntSelect } from 'antd';
import 'antd/dist/reset.css';
import InputWrapper from '../input-wrapper/input-wrapper';
import type { ReactNode } from 'react';

export interface SelectProps<T> {
  label: ReactNode;
  id: string;
  options?: { value: string; label: string }[];
  defaultValue?: string;
  onChange?: (value: T) => void;
  value: T;
}

export interface NumberProps {
  value: string;
  onChange: (value: string) => void;
  id: string;
  onBlur?: () => void;
  error?: string;
  label?: ReactNode;
}

export const Select = ({ label, id, options, defaultValue, onChange, value }: SelectProps<string>) => {
  return (
    <InputWrapper label={label} id={id} value={value}>
      <AntSelect id={id} defaultValue={defaultValue} className="malam-select" onChange={onChange}>
        {options?.map(option => (
          <AntSelect.Option key={option.value} value={option.value}>
            {option.label}
          </AntSelect.Option>
        ))}
      </AntSelect>
    </InputWrapper>
  );
};

export default Select;
