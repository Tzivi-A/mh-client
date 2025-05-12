import { DatePicker as AntDatePicker } from 'antd';
import 'antd/dist/reset.css';
import 'dayjs/locale/he';
import InputWrapper from '@ui/form/input-wrapper/input-wrapper';
import type { FormFieldProps } from '@app-types/form-type';
import type { DatePickerType } from '@app-types/date-type';
import { toDayjs } from '@utils/date-utils';
import { useState } from 'react';

export interface DatePickerProps<T> extends FormFieldProps<T> {
  minDate?: DatePickerType;
  maxDate?: DatePickerType;
  inputReadOnly?: boolean;
  placeholder?: string;
}

export const DatePicker = ({
  label,
  id,
  onChange,
  value,
  inputReadOnly = true,
  minDate,
  maxDate,
  error,
  isRequired,
  placeholder: initialPlaceholder
}: DatePickerProps<DatePickerType>) => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(initialPlaceholder);

  return (
    <InputWrapper label={label} id={id} error={error} isRequired={isRequired}>
      <AntDatePicker
        className="malam-input"
        value={toDayjs(value) || null}
        onChange={onChange}
        inputReadOnly={inputReadOnly}
        format="DD/MM/YYYY"
        minDate={toDayjs(minDate)}
        maxDate={toDayjs(maxDate)}
        onFocus={() => {
          if (!inputReadOnly) {
            setCurrentPlaceholder('DD/MM/YYYY');
          }
        }}
        onBlur={() => setCurrentPlaceholder(initialPlaceholder)}
        placeholder={currentPlaceholder}
      />
    </InputWrapper>
  );
};

export default DatePicker;
