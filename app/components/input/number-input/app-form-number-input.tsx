import NumberInput from './number-input';
import { AppFormInput } from '../app-form-input';

export interface AppFormInputProps {
  label: string;
}

export const AppFormNumber = ({ label }: AppFormInputProps) => {
  return (
    <AppFormInput label={label} InputComponent={NumberInput} />
  );
};
