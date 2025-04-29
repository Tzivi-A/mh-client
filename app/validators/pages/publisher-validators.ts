import type { DatePickerType } from '@app-types/date-types';
import { toDayjs } from '@utils/date-utils';
import { validateDateRange } from '~/validators';

export const validateFormDateRange = (fromDate: DatePickerType, toDate: DatePickerType) =>
  validateDateRange(fromDate, toDate) &&
  `יש לבחור בתאריך שווה או גדול מ${toDayjs(fromDate)?.toString()}`;
