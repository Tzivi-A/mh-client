import type { ReactNode } from 'react';

export type FieldType = 'number' | 'text' | 'select';

export interface BaseAppFormField {
  fieldType: FieldType;
  label?: ReactNode;
}

export interface AppFormTextInputField extends BaseAppFormField {
  fieldType: 'text';
}
export interface AppFormNumberField extends BaseAppFormField {
  fieldType: 'number';
  max?: number;
}

export type AppFormFieldProps = AppFormTextInputField | AppFormNumberField;
