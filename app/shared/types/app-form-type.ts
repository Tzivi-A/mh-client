import type { ReactNode } from 'react';
import type { FieldTypeEnum } from '@app-types/enums/field-type';
import type { DatePickerType } from './date-type';
import type { Option } from './option-type';

export interface BaseAppFormField {
  fieldType: FieldTypeEnum;
  label?: ReactNode;
  disabled?: boolean;
  isRequired?: boolean;
}

type AppFormFieldConstraint<T> = T extends BaseAppFormField ? T : never;

export interface AppFormTextInputField extends BaseAppFormField {
  fieldType: FieldTypeEnum.TEXT;
  placeholder?: string;
}

export interface AppFormNumberField extends BaseAppFormField {
  fieldType: FieldTypeEnum.NUMBER;
  placeholder?: string;
  min?: number;
  max?: number;
}

export interface AppFormSelectField extends BaseAppFormField {
  fieldType: FieldTypeEnum.SELECT;
  placeholder?: string;
  options: Option[];
  includeEmptyOption?: boolean;
  emptyOptionLabel?: string;
}

export interface AppFormDatePickerField extends BaseAppFormField {
  fieldType: FieldTypeEnum.DATE_PICKER;
  placeholder?: string;
  inputReadOnly?: boolean;
  minDate?: DatePickerType;
  maxDate?: DatePickerType;
}

export interface AppFormCheckBoxField extends BaseAppFormField {
  fieldType: FieldTypeEnum.CHECK_BOX;
}

export interface AppFormCheckBoxGroupField extends BaseAppFormField {
  fieldType: FieldTypeEnum.CHECK_BOX_GROUP;
  options: Option[];
}

export interface AppFormRadioButtonField extends BaseAppFormField {
  fieldType: FieldTypeEnum.RADIO_BUTTON;
  options: Option[];
}

export interface AppFormSwitchField extends BaseAppFormField {
  fieldType: FieldTypeEnum.SWITCH;
}

export type AppFormFieldProps = AppFormFieldConstraint<
  | AppFormTextInputField
  | AppFormNumberField
  | AppFormSelectField
  | AppFormDatePickerField
  | AppFormCheckBoxField
  | AppFormCheckBoxGroupField
  | AppFormRadioButtonField
  | AppFormSwitchField
>;