import type { DatePickerType } from '@app-types/date-types';
import { toDayjs } from '@utils/date-utils';
import { parseNumber } from '@utils/number-utils';
import { validateDateRange, validateNumberRange } from '~/validators';

export const validateFromDateRange = (fromDate: DatePickerType, toDate: DatePickerType) =>
  validateDateRange(fromDate, toDate) &&
  `יש לבחור בתאריך שווה או קטן מ ${toDayjs(toDate)?.toString()}`;

export const validateToDateRange = (fromDate: DatePickerType, toDate: DatePickerType) =>
  validateDateRange(fromDate, toDate) &&
  `יש לבחור בתאריך שווה או גדול מ ${toDayjs(fromDate)?.toString()}`;

export const validateFromSumRange = (fromSum?: number, toSum?: number) =>
  validateNumberRange(fromSum, toSum) && `אנא הזן ערך קטן או שווה ל ${parseNumber(toSum)}`;

export const validateToSumRange = (fromSum?: number, toSum?: number) =>
  validateNumberRange(fromSum, toSum) && `אנא הזן ערך גדול או שווה ל ${parseNumber(fromSum)}`;
