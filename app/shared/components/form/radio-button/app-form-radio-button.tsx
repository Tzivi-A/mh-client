import { FieldTypeEnum } from '@app-types/enums/field-type';
import type { AppFormRadioButtonField } from '@app-types/app-form-types';
import { AppFormField } from '@ui/form/app-form-field';

export type AppFormRadioButtonProps = Omit<AppFormRadioButtonField, 'fieldType'>;

export const AppFormRadioButton = ({ label, options }: AppFormRadioButtonProps) => {
  return <AppFormField label={label} fieldType={FieldTypeEnum.RADIO_BUTTON} options={options} />;
};
