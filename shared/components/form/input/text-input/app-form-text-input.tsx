import { FieldTypeEnum } from '@app-types/enums/field-type';
import { AppFormField } from '@ui/form/app-form-field';
import type { AppFormTextInputField } from '@app-types/app-form-types';

export type AppFormTextInputProps = Omit<AppFormTextInputField, 'fieldType'>;

export const AppFormTextInput = ({ label }: AppFormTextInputProps) => {
  return <AppFormField label={label} fieldType={FieldTypeEnum.TEXT} />;
};
