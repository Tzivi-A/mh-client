import type { Updater } from '@tanstack/react-form';
import { useFieldContext } from '~/hooks/form-context';

export interface AppFormSelectProps {
  label: string;
  InputComponent: React.ElementType;
}

export interface InputProps {
    value: string;
    onChange?: (value: string) => void;
    id: string;
    onBlur?: () => void;
    error?: string;
    label?: string;
  }

export const AppFormInput = ({ label, InputComponent }: AppFormSelectProps) => {
  const field = useFieldContext<string>();
  return (
    <InputComponent
      id={field.name}
      label={label}
      value={field.state.value}
      onChange={(e: Updater<string>) => field.handleChange(e)}
    />
  );
};
