import type { DatePickerType } from '@app-types/date-types';
import { dateToString } from '@utils/date-utils';
import { parseNumber } from '@utils/number-utils';
import { validateDateRange, validateNumberRange } from '@validators/range-validators';

export const validateFromDateRange = (
  fromDate: DatePickerType,
  toDate: DatePickerType
): string | undefined =>
  validateDateRange(fromDate, toDate) && `יש לבחור בתאריך שווה או קטן מ ${dateToString(toDate)}`;

export const validateToDateRange = (
  fromDate: DatePickerType,
  toDate: DatePickerType
): string | undefined =>
  validateDateRange(fromDate, toDate) && `יש לבחור בתאריך שווה או גדול מ ${dateToString(fromDate)}`;

export const validateFromSumRange = (fromSum?: number, toSum?: number): string | undefined =>
  validateNumberRange(fromSum, toSum) && `אנא הזן ערך קטן או שווה ל ${parseNumber(toSum)}`;

export const validateToSumRange = (fromSum?: number, toSum?: number): string | undefined =>
  validateNumberRange(fromSum, toSum) && `אנא הזן ערך גדול או שווה ל ${parseNumber(fromSum)}`;
