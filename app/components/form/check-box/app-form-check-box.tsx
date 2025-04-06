import { FieldTypeEnum } from '~/enums/field-type';
import type { AppFormCheckBoxField } from '~/types/app-form-types';
import { AppFormField } from '../app-form-field';   

export type AppFormCheckBoxProps = Omit<AppFormCheckBoxField, 'fieldType'>;

export const AppFormCheckBox = ({ label }: AppFormCheckBoxProps) => {
  return <AppFormField fieldType={FieldTypeEnum.CHECK_BOX} label={label}/>;
};