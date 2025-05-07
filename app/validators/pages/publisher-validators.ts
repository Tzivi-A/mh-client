import type { DatePickerType } from '@app-types/date-types';
import { dateToString } from '@utils/date-utils';
import { parseNumber } from '@utils/number-utils';
import type { PublisherSearch } from '~/types/publisher/publisher-search';
import { validateDateRange, validateNumberRange } from '~/validators/common/range-validators';

export const validateFromDateRange = (fromDate: DatePickerType, toDate: DatePickerType) =>
  validateDateRange(fromDate, toDate) && `יש לבחור בתאריך שווה או קטן מ ${dateToString(toDate)}`;

export const validateToDateRange = (fromDate: DatePickerType, toDate: DatePickerType) =>
  validateDateRange(fromDate, toDate) && `יש לבחור בתאריך שווה או גדול מ ${dateToString(fromDate)}`;

export const validateFromSumRange = (fromSum?: number, toSum?: number) =>
  validateNumberRange(fromSum, toSum) && `אנא הזן ערך קטן או שווה ל ${parseNumber(toSum)}`;

export const validateToSumRange = (fromSum?: number, toSum?: number) =>
  validateNumberRange(fromSum, toSum) && `אנא הזן ערך גדול או שווה ל ${parseNumber(fromSum)}`;

export const atLeastOneFieldFilled = (value: PublisherSearch) => {
  const isAllEmpty =
    Object.keys(value).length === 0 ||
    Object.values(value).every(v => v === null || v === undefined || v === '');

  return isAllEmpty ? 'יש לבחור מאפיין נוסף לחיפוש' : undefined;
};
