import type { DatePickerType } from '@app-types/date-type';
import { toDayjs } from '@utils/date-utils';
import type { ValidatorType } from '@app-types/validator-type';

export const validateDateRange = (
  minDate: DatePickerType,
  maxDate: DatePickerType
): ValidatorType => {
  const fromDate = toDayjs(minDate);
  const toDate = toDayjs(maxDate);

  if (fromDate && toDate && fromDate.startOf('day').isAfter(toDate.startOf('day'))) {
    return true;
  }
  return undefined;
};

export const validateNumberRange = (min?: number, max?: number): ValidatorType =>
  min && max && min.toString() !== '-' && max.toString() !== '-' && min > max ? true : undefined;
