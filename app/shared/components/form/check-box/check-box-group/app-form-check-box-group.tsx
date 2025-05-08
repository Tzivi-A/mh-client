import { FieldTypeEnum } from '@app-types/enums/field-type';
import type { AppFormCheckBoxGroupField } from '@app-types/app-form-type';
import { AppFormField } from '@ui/form/app-form-field';

export type AppFormCheckBoxGroupProps = Omit<AppFormCheckBoxGroupField, 'fieldType'>;

export const AppFormCheckBoxGroup = ({ label, isRequired, options }: AppFormCheckBoxGroupProps) => {
  return (
    <AppFormField
      fieldType={FieldTypeEnum.CHECK_BOX_GROUP}
      label={label}
      isRequired={isRequired}
      options={options}
    />
  );
};
