import { Select as AntSelect } from 'antd';
import 'antd/dist/reset.css';
import InputWrapper from '../input-wrapper/input-wrapper';
import type { FormFieldProps } from '~/types/form-types';

export interface SelectProps extends FormFieldProps<string> {
  options?: { value: string; label: string }[];
}

export const Select = ({ label, id, options, onChange, value, error }: SelectProps) => {
  return (
    <InputWrapper label={label} id={id} value={value} error={error}>
      <AntSelect
        id={id}
        defaultValue={value}
        className="malam-select"
        onChange={onChange}
        value={value}
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
