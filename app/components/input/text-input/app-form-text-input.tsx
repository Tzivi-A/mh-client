import { useFieldContext } from '~/hooks/form-context';
import TextInput from './text-input';

export interface AppFormSelectProps {
  label: string;
}

export const AppFormText = ({ label }: AppFormSelectProps) => {
  const field = useFieldContext<string>();
  return (
    <TextInput
      id={field.name}
      label={label}
      value={field.state.value}
      onChange={e => field.handleChange(e)}
      error={field?.state?.meta?.errors?.join(' ')}
    />
  );
};
