import type { DatePickerType } from '~/types/date-types';
import dayjs, { Dayjs } from 'dayjs';

export const toDayjs = (value: DatePickerType): Dayjs | undefined => {
  if (!value) return undefined;
  return dayjs.isDayjs(value) ? value : dayjs(value, 'DD/MM/YYYY');
};

export const parseDate = (dateString: string): number => {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day).getTime();
};
