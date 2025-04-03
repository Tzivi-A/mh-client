import { FieldTypeEnum } from '~/enums/field-type';
import { AppFormField } from '../../app-form-field';
import type { AppFormTextInputField } from '~/types/app-form-types';

export type AppFormTextInputProps = Omit<AppFormTextInputField, 'fieldType'>;

export const AppFormTextInput = ({ label }: AppFormTextInputProps) => {
  return <AppFormField label={label} fieldType={FieldTypeEnum.TEXT} />;
};
