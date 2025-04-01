import { FieldTypeEnum } from '~/enums/field-type';
import type { AppFormDatePickerField } from '~/types/app-form-types';
import { AppFormField } from '../app-form-field';

export type AppFormDatePickerProps = Omit<AppFormDatePickerField, 'fieldType'>;

export const AppFormDatePicker = ({ ...props }: AppFormDatePickerProps) => {
  return <AppFormField fieldType={FieldTypeEnum.DATE_PICKER} {...props}/>;
};
