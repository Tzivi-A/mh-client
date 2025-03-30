import TextInput from './text-input';
import { AppFormInput } from '../app-form-input';

export interface AppFormInputProps {
  label: string;
}

export const AppFormText = ({ label }: AppFormInputProps) => {
  return (
    <AppFormInput label={label} InputComponent={TextInput} />
  );
};
