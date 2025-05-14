import { FieldTypeEnum } from '@app-types/enums/field-type';
import type { AppFormSwitchField } from '@app-types/app-form-type';
import { AppFormField } from '@ui/form/app-form-field';

export type AppFormSwitchProps = Omit<AppFormSwitchField, 'fieldType'>;

export const AppFormSwitch = ({ label, isRequired }: AppFormSwitchProps) => {
  return (
    <AppFormField
      fieldType={FieldTypeEnum.SWITCH}
      label={label}
      isRequired={isRequired}
    />
  );
};