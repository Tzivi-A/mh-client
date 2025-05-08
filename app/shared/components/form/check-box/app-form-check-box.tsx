import { FieldTypeEnum } from '@app-types/enums/field-type';
import type { AppFormCheckBoxField } from '@app-types/app-form-type';
import { AppFormField } from '@ui/form/app-form-field';

export type AppFormCheckBoxProps = Omit<AppFormCheckBoxField, 'fieldType'>;

export const AppFormCheckBox = ({ label, isRequired }: AppFormCheckBoxProps) => {
  return <AppFormField fieldType={FieldTypeEnum.CHECK_BOX} label={label} isRequired={isRequired} />;
};
