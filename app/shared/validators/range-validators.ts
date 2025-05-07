import type { DatePickerType } from '@app-types/date-types';
import { toDayjs } from '@utils/date-utils';
import type { validatorType } from '@app-types/validator';

export const validateDateRange = (
  minDate: DatePickerType,
  maxDate: DatePickerType
): validatorType => {
  const fromDate = toDayjs(minDate);
  const toDate = toDayjs(maxDate);

  if (fromDate && toDate && fromDate.startOf('day').isAfter(toDate.startOf('day'))) {
    return true;
  }
  return undefined;
};

export const validateNumberRange = (min?: number, max?: number): validatorType =>
  min && max && min.toString() !== '-' && max.toString() !== '-' && min > max ? true : undefined;
