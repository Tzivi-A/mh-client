import type { ReactNode } from 'react';
import type { FieldTypeEnum } from '~/enums/field-type';

export interface BaseAppFormField<T extends ReactNode> {
    fieldType: FieldTypeEnum;
    label?: ReactNode;
}

export interface AppFormTextInputField extends BaseAppFormField<string> {
    fieldType: FieldTypeEnum.TEXT;
}
export interface AppFormNumberField extends BaseAppFormField<string> {
    fieldType: FieldTypeEnum.NUMBER;
    max?: number;
}

export interface AppFormSelectField extends BaseAppFormField<string> {
    fieldType: FieldTypeEnum.SELECT;
    options: { value: string; label: string }[];
}

export type AppFormFieldProps = AppFormTextInputField | AppFormNumberField | AppFormSelectField;
