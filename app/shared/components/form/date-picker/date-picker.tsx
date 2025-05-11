import { DatePicker as AntDatePicker } from 'antd';
import 'antd/dist/reset.css';
import 'dayjs/locale/he';
import InputWrapper from '@ui/form/input-wrapper/input-wrapper';
import type { FormFieldProps } from '@app-types/form-type';
import type { DatePickerType } from '@app-types/date-type';
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
  error,
  isRequired
}: DatePickerProps<DatePickerType>) => {
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
        placeholder={!inputReadOnly ? 'DD/MM/YYYY' : ''}
      />
    </InputWrapper>
  );
};

export default DatePicker;
