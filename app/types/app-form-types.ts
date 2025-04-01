import type { ReactNode } from 'react';
import type { FieldTypeEnum } from '~/enums/field-type';
import type { DatePickerType } from './date-types';

export interface BaseAppFormField {
    fieldType: FieldTypeEnum;
    label?: ReactNode;
}

type AppFormFieldConstraint<T> = T extends BaseAppFormField ? T : never;

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
    options: { value: string; label: string }[];
}

export interface AppFormDatePickerField extends BaseAppFormField {
    fieldType: FieldTypeEnum.DATE_PICKER;
    inputReadOnly?: boolean;
    minDate?: DatePickerType;
    maxDate?: DatePickerType;
}

export interface AppFormCheckBoxField extends BaseAppFormField {
    fieldType: FieldTypeEnum.CHECK_BOX;
}

export type AppFormFieldProps = AppFormFieldConstraint<
    AppFormTextInputField |
    AppFormNumberField |
    AppFormSelectField |
    AppFormDatePickerField |
    AppFormCheckBoxField
>;
