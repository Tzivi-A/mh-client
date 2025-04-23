import { FieldTypeEnum } from '@app-types/enums/field-type';
import type { AppFormCheckBoxField } from '@app-types/app-form-types';
import { AppFormField } from '../app-form-field';

export type AppFormCheckBoxProps = Omit<AppFormCheckBoxField, 'fieldType'>;

export const AppFormCheckBox = ({ label }: AppFormCheckBoxProps) => {
  return <AppFormField fieldType={FieldTypeEnum.CHECK_BOX} label={label} />;
};
