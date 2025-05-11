import { FieldTypeEnum } from '@app-types/enums/field-type';
import type { AppFormSelectField } from '@app-types/app-form-type';
import { AppFormField } from '@ui/form/app-form-field';

export type AppFormSelectProps = Omit<AppFormSelectField, 'fieldType'>;

export const AppFormSelect = ({ label, isRequired, disabled, options }: AppFormSelectProps) => {
  return (
    <AppFormField
      fieldType={FieldTypeEnum.SELECT}
      label={label}
      disabled={disabled}
      isRequired={isRequired}
      options={options}
    />
  );
};
