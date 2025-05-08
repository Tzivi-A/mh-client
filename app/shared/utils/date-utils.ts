import dayjs from 'dayjs';
import type { DatePickerType, DateType } from '@app-types/date-type';

export const toDayjs = (value: DatePickerType): DateType => {
  if (!value) return undefined;
  return dayjs.isDayjs(value) ? value : dayjs(value, 'DD/MM/YYYY');
};

export const parseDate = (dateString: string): number => {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day).getTime();
};

export const dateToString = (value: DatePickerType): string => {
  const date = toDayjs(value);
  if (!date || !date.isValid()) return '';
  return date.format('DD/MM/YYYY');
};
