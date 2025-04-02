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
  error: string;
}

export const Select = ({
  label,
  id,
  options,
  defaultValue,
  error,
  onChange,
  value
}: SelectProps) => {
  return (
    <InputWrapper label={label} id={`${id}`} value={value} error={error}>
      <AntSelect
        id={id}
        defaultValue={defaultValue}
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
