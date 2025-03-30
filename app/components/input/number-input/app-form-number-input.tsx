import NumberInput from './number-input';
import { AppFormInput, type AppFormInputProps } from '../app-form-input';

export const AppFormNumber = ({ label }: AppFormInputProps) => {
  return (
    <AppFormInput label={label} InputComponent={NumberInput} />
  );
};
