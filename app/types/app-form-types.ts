import type { ReactNode } from 'react';
import type { FieldTypeEnum } from '~/enums/field-type';
import type { DatePickerType } from './date-types';
import type { Option } from './option';

export interface BaseAppFormField {
  fieldType: FieldTypeEnum;
  label?: ReactNode;
}

export interface AppFormTextInputField extends BaseAppFormField {
  fieldType: FieldTypeEnum.TEXT;
}

export interface AppFormNumberField extends BaseAppFormField {
  fieldType: FieldTypeEnum.NUMBER;
  min?: number;
  max?: number;
}

export interface AppFormSelectField extends BaseAppFormField {
  fieldType: FieldTypeEnum.SELECT;
  options: Option[];
}

export interface AppFormDatePickerField extends BaseAppFormField {
  fieldType: FieldTypeEnum.DATE_PICKER;
  inputReadOnly?: boolean;
  minDate?: DatePickerType;
  maxDate?: DatePickerType;
}

export type AppFormFieldProps =
  | AppFormTextInputField
  | AppFormNumberField
  | AppFormSelectField
  | AppFormDatePickerField;
