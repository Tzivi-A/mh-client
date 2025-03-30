import TextInput from './text-input';
import { AppFormInput, type AppFormInputProps } from '../app-form-input';

export const AppFormText = ({ label }: AppFormInputProps) => {
  return (
    <AppFormInput label={label} InputComponent={TextInput} />
  );
};
