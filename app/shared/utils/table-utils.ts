import { parseDate } from './date-utils';

export const sorterFunctions = {
  string: (a: unknown, b: unknown) => ((a as string) || '').localeCompare((b as string) || ''),
  date: (a: unknown, b: unknown) => parseDate(a as string) - parseDate(b as string),
  number: (a: unknown, b: unknown) => ((a as number) || 0) - ((b as number) || 0),
  undefined: (a: unknown, b: unknown) => (a === b ? 0 : 1)
};
