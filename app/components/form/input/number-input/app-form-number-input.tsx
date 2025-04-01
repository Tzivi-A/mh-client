import { FieldTypeEnum } from '~/enums/field-type';
import { AppFormField } from '../../app-form-field';
import type { AppFormNumberField } from '~/types/app-form-types';

export type AppFormNumberProps = Omit<AppFormNumberField, 'fieldType'>;

export const AppFormNumber = ({ label }: AppFormNumberProps) => {
  return <AppFormField fieldType={FieldTypeEnum.NUMBER} label={label} />;
};