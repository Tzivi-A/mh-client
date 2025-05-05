import type { DatePickerType } from '@app-types/date-types';
import { toDayjs } from '@utils/date-utils';

export const validateDateRange = (minDate: DatePickerType, maxDate: DatePickerType) => {
  const fromDate = toDayjs(minDate);
  const toDate = toDayjs(maxDate);

  if (fromDate && toDate && fromDate.startOf('day').isAfter(toDate.startOf('day'))) {
    return true;
  }
  return undefined;
};
