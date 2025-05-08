import { FieldTypeEnum } from '@app-types/enums/field-type';
import type { AppFormDatePickerField } from '@app-types/app-form-type';
import { AppFormField } from '@ui/form/app-form-field';

export type AppFormDatePickerProps = Omit<AppFormDatePickerField, 'fieldType'>;

export const AppFormDatePicker = ({
  label,
  isRequired,
  minDate,
  maxDate,
  inputReadOnly
}: AppFormDatePickerProps) => {
  return (
    <AppFormField
      fieldType={FieldTypeEnum.DATE_PICKER}
      label={label}
      isRequired={isRequired}
      minDate={minDate}
      maxDate={maxDate}
      inputReadOnly={inputReadOnly}
    />
  );
};
