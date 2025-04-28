import type { DatePickerType } from '@app-types/date-types';
import dayjs, { Dayjs } from 'dayjs';

export const toDayjs = (value: DatePickerType): Dayjs | undefined => {
  if (!value) return undefined;
  return dayjs.isDayjs(value) ? value : dayjs(value, 'DD/MM/YYYY');
};

export const parseDate = (dateString: string): number => {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day).getTime();
};

export const sorterFunctions = {
  string: (a: unknown, b: unknown) => ((a as string) || '').localeCompare((b as string) || ''),
  date: (a: unknown, b: unknown) => parseDate(a as string) - parseDate(b as string),
  number: (a: unknown, b: unknown) => ((a as number) || 0) - ((b as number) || 0),
  undefined: (a: unknown, b: unknown) => (a === b ? 0 : 1)
};
