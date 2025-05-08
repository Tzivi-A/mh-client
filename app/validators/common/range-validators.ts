import type { DatePickerType } from '@app-types/date-type';
import { dateToString } from '@utils/date-utils';
import { parseNumber } from '@utils/number-utils';
import { validateDateRange, validateNumberRange } from '@validators/range-validators';
import type { ValidatorMessageType } from '~/types/validator-message-type';

export const validateFromDateRange = (
  fromDate: DatePickerType,
  toDate: DatePickerType
): ValidatorMessageType =>
  validateDateRange(fromDate, toDate) && `יש לבחור בתאריך שווה או קטן מ ${dateToString(toDate)}`;

export const validateToDateRange = (
  fromDate: DatePickerType,
  toDate: DatePickerType
): ValidatorMessageType =>
  validateDateRange(fromDate, toDate) && `יש לבחור בתאריך שווה או גדול מ ${dateToString(fromDate)}`;

export const validateFromSumRange = (fromSum?: number, toSum?: number): ValidatorMessageType =>
  validateNumberRange(fromSum, toSum) && `אנא הזן ערך קטן או שווה ל ${parseNumber(toSum)}`;

export const validateToSumRange = (fromSum?: number, toSum?: number): ValidatorMessageType =>
  validateNumberRange(fromSum, toSum) && `אנא הזן ערך גדול או שווה ל ${parseNumber(fromSum)}`;
