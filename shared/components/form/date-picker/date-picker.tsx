import { useState } from 'react';
import { DatePicker as AntDatePicker, type DatePickerProps as AntDatePickerProps } from 'antd';
import 'antd/dist/reset.css';
import 'dayjs/locale/he';
import InputWrapper from '../input-wrapper/input-wrapper';
import type { FormFieldProps } from '@app-types/form-types';
import type { DatePickerType } from '@app-types/date-types';
import { toDayjs } from '@utils/date-utils';

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
  const parsedValue = toDayjs(value) || null;
  const [isFocused, setIsFocused] = useState<boolean>(!!value);

  const handleInputChange: AntDatePickerProps['onChange'] = (date, dateString) => {
    onChange?.(date);
    setIsFocused(!!dateString);
  };

  const handleInputFocus = () => setIsFocused(true);

  const handleInputBlur = () => {
    if (!parsedValue) setIsFocused(false);
  };

  return (
    <InputWrapper label={label} id={id} value={parsedValue} focused={isFocused} error={error}>
      <AntDatePicker
        className="malam-input"
        value={parsedValue}
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
