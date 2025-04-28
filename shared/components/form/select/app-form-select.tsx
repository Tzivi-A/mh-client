import { FieldTypeEnum } from '@app-types/enums/field-type';
import type { AppFormSelectField } from '@app-types/app-form-types';
import { AppFormField } from '../app-form-field';

export type AppFormTextInputProps = Omit<AppFormSelectField, 'fieldType'>;

export const AppFormSelect = ({ label, options }: AppFormTextInputProps) => {
  return <AppFormField label={label} fieldType={FieldTypeEnum.SELECT} options={options} />;
};
