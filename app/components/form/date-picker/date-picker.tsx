import { useState } from 'react';
import { DatePicker as AntDatePicker } from 'antd';
import type { DatePickerProps as AntDatePickerProps } from 'antd';
import 'antd/dist/reset.css';
import 'dayjs/locale/he';
import dayjs, { Dayjs } from 'dayjs';
import InputWrapper from '../input-wrapper/input-wrapper';
import type { FormFieldProps } from '~/types/form-types';
import type { DatePickerType } from '~/types/date-types';

interface DatePickerProps<T> extends FormFieldProps<T> {
    minDate?: DatePickerType;
    maxDate?: DatePickerType;
    inputReadOnly?: boolean;
}

export const toDayjs = (date: DatePickerType | undefined): Dayjs | undefined => typeof date === 'string' ? dayjs(date, 'DD/MM/YYYY') : date;

export const DatePicker = ({ label, id, onChange, value, inputReadOnly = true, minDate, maxDate }: DatePickerProps<DatePickerType>) => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(toDayjs(value) || null);
    const [isFocused, setIsFocused] = useState<boolean>(!!value);

    const handleInputChange: AntDatePickerProps['onChange'] = (date, dateString) => {
        setSelectedDate(date);
        onChange?.(date);
        setIsFocused(!!dateString);
    };

    const handleInputFocus = () => setIsFocused(true);

    const handleInputBlur = () => {
        if (!selectedDate) setIsFocused(false);
    };
    
    return (  
        <InputWrapper label={label} id={id} value={selectedDate} focused={isFocused}>
            <AntDatePicker className="malam-input" 
                value={selectedDate}
                onChange={handleInputChange}
                inputReadOnly={inputReadOnly}
                format={{
                    format: 'DD/MM/YYYY',
                    type: !inputReadOnly ? 'mask' : undefined,
                }}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                minDate={toDayjs(minDate)}
                maxDate={toDayjs(maxDate)}
                placeholder=''
            />
        </InputWrapper>
    );
};

export default DatePicker;

