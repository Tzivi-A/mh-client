import { Select } from 'antd';
import 'antd/dist/reset.css';
import './select.css';

interface SelectProps {
  options: { value: string; label: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const MHSelect = ({ options, defaultValue, onChange }: SelectProps) => {
  return (
    <Select defaultValue={defaultValue} onChange={onChange} style={{ width: 200 }}>
      {options.map(option => (
        <Select.Option key={option.value} value={option.value}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  );
};
export default MHSelect;
