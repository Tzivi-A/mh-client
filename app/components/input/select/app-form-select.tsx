import { useFieldContext } from '~/hooks/form-context';
import Select from './select';

export interface AppFormSelectProps {
  label: string;
  options: { value: string; label: string }[];
}

export const AppFormSelect = ({ label, options }: AppFormSelectProps) => {
  const field = useFieldContext<string>();
  return (
    <Select
      id={field.name}
      label={label}
      options={options}
      value={field.state.value}
      onChange={e => field.handleChange(e)}
    />
  );
};
