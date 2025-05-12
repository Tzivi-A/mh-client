import { FieldTypeEnum } from '@app-types/enums/field-type';
import { AppFormField } from '@ui/form/app-form-field';
import type { AppFormTextInputField } from '@app-types/app-form-type';

export type AppFormTextInputProps = Omit<AppFormTextInputField, 'fieldType'>;

export const AppFormTextInput = ({ label, isRequired, placeholder }: AppFormTextInputProps) => {
  return (
    <AppFormField
      fieldType={FieldTypeEnum.TEXT}
      label={label}
      isRequired={isRequired}
      placeholder={placeholder}
    />
  );
};
