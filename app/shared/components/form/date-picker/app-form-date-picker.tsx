import { FieldTypeEnum } from '@app-types/enums/field-type';
import type { AppFormDatePickerField } from '@app-types/app-form-types';
import { AppFormField } from '@ui/form/app-form-field';

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
