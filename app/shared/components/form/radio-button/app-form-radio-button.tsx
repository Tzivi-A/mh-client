import { FieldTypeEnum } from '@app-types/enums/field-type';
import type { AppFormRadioButtonField } from '@app-types/app-form-type';
import { AppFormField } from '@ui/form/app-form-field';

export type AppFormRadioButtonProps = Omit<AppFormRadioButtonField, 'fieldType'>;

export const AppFormRadioButton = ({ label, isRequired, options }: AppFormRadioButtonProps) => {
  return (
    <AppFormField
      fieldType={FieldTypeEnum.RADIO_BUTTON}
      label={label}
      isRequired={isRequired}
      options={options}
    />
  );
};
