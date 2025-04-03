import { useState } from 'react';
import { DatePicker as AntDatePicker, type DatePickerProps as AntDatePickerProps } from 'antd';
import 'antd/dist/reset.css';
import 'dayjs/locale/he';
import dayjs, { Dayjs } from 'dayjs';
import InputWrapper from '../input-wrapper/input-wrapper';
import type { FormFieldProps } from '~/types/form-types';
import type { DatePickerType } from '~/types/date-types';

export interface DatePickerProps<T> extends FormFieldProps<T> {
  minDate?: DatePickerType;
  maxDate?: DatePickerType;
  inputReadOnly?: boolean;
}

export const toDayjs = (value: DatePickerType): Dayjs | undefined => {
  if (!value) return undefined;
  return dayjs.isDayjs(value) ? value : dayjs(value, 'DD/MM/YYYY');
};

export const checkDateRange = (minDate: DatePickerType, maxDate: DatePickerType) => {
  const fromDate = toDayjs(minDate);
  const toDate = toDayjs(maxDate);

  if (fromDate && toDate && fromDate.isAfter(toDate)) {
    return '"מתאריך" חייב להיות מוקדם מ"עד תאריך"';
  }
  return undefined;
};

export const DatePicker = ({
  label,
  id,
  onChange,
  value,
  inputReadOnly = true,
  minDate,
  maxDate,
  error
}: DatePickerProps<DatePickerType>) => {
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
    <InputWrapper label={label} id={id} value={selectedDate} focused={isFocused} error={error}>
      <AntDatePicker
        className="malam-input"
        value={selectedDate}
        onChange={handleInputChange}
        inputReadOnly={inputReadOnly}
        format={{
          format: 'DD/MM/YYYY',
          type: !inputReadOnly ? 'mask' : undefined
        }}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        minDate={toDayjs(minDate)}
        maxDate={toDayjs(maxDate)}
        placeholder=""
      />
    </InputWrapper>
  );
};

export default DatePicker;
