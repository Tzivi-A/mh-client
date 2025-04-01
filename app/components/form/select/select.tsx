import { Select as AntSelect } from 'antd';
import 'antd/dist/reset.css';
import InputWrapper from '../input-wrapper/input-wrapper';
import type { FormFieldProps } from '~/types/form-types';

export interface SelectProps extends FormFieldProps<string> {
  options?: { value: string; label: string }[];
}

export const Select = ({ label, id, options, onChange, value }: SelectProps) => {
  return (
    <InputWrapper label={label} id={id} value={value}>
      <AntSelect id={id} defaultValue={value} className="malam-select" onChange={onChange}>
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
