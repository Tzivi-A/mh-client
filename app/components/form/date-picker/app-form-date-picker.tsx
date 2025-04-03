import { FieldTypeEnum } from '~/enums/field-type';
import type { AppFormDatePickerField } from '~/types/app-form-types';
import { AppFormField } from '../app-form-field';

export type AppFormDatePickerProps = Omit<AppFormDatePickerField, 'fieldType'>;

export const AppFormDatePicker = ({
  label,
  minDate,
  maxDate,
  inputReadOnly
}: AppFormDatePickerProps) => {
  return (
    <AppFormField
      fieldType={FieldTypeEnum.DATE_PICKER}
      label={label}
      minDate={minDate}
      maxDate={maxDate}
      inputReadOnly={inputReadOnly}
    />
  );
};
