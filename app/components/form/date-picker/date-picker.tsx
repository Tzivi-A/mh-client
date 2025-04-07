import { useState } from 'react';
import { DatePicker as AntDatePicker, type DatePickerProps as AntDatePickerProps } from 'antd';
import 'antd/dist/reset.css';
import 'dayjs/locale/he';
import { Dayjs } from 'dayjs';
import InputWrapper from '../input-wrapper/input-wrapper';
import type { FormFieldProps } from '~/types/form-types';
import type { DatePickerType } from '~/types/date-types';
import { toDayjs } from '~/utils/utils';

export interface DatePickerProps<T> extends FormFieldProps<T> {
  minDate?: DatePickerType;
  maxDate?: DatePickerType;
  inputReadOnly?: boolean;
}

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
        format="DD/MM/YYYY"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        minDate={toDayjs(minDate)}
        maxDate={toDayjs(maxDate)}
        placeholder={isFocused && !inputReadOnly ? 'DD/MM/YYYY' : ''}
      />
    </InputWrapper>
  );
};

export default DatePicker;
