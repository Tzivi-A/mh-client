import type { ReactNode } from "react";

export interface FormFieldProps<T> {
    label: ReactNode;
    id: string;
    value?: T;
    onChange?: (value: T) => void;
    onBlur?: () => void;
    error?: string;
}