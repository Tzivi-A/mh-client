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
  value: string;
}

export const Select = ({ label, id, options, defaultValue, onChange, value }: SelectProps) => {
  return (
    <InputWrapper label={label} id={`${id}`} value={value}>
      <AntSelect id={id} defaultValue={defaultValue} className="malam-select" onChange={onChange}>
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
