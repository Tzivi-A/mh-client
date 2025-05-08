import { FieldTypeEnum } from '@app-types/enums/field-type';
import { AppFormField } from '@ui/form/app-form-field';
import type { AppFormNumberField } from '@app-types/app-form-type';

export type AppFormNumberProps = Omit<AppFormNumberField, 'fieldType'>;

export const AppFormNumber = ({ label, min, max }: AppFormNumberProps) => {
  return <AppFormField fieldType={FieldTypeEnum.NUMBER} label={label} min={min} max={max} />;
};
