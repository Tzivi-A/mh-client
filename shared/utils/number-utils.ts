export const formatNumber = (value?: string | number): string => {
  if (value === undefined || value === null || value === '') return '';

  const str = typeof value === 'number' ? value.toString() : value;
  // Allow a leading minus sign and remove any non-digit characters except for commas
  const cleaned = str?.replace(/[^0-9,-]/g, '');

  const isNegative = cleaned?.startsWith('-');
  const digits = cleaned?.replace(/-/g, '').replace(/^0+(?=\d)/, '');

  // Format the number with commas
  const formatted = digits?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return isNegative ? `-${formatted}` : formatted || '';
};

const createHEILFormatter = (opts: Intl.NumberFormatOptions = {}) =>
  new Intl.NumberFormat('he-IL', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...opts
  });

export const parseNumber = (value?: string | number) =>
  createHEILFormatter().format(value ? parseFloat(value.toString()) : 0);

export const ilsFormatter = createHEILFormatter({
  style: 'currency',
  currency: 'ILS'
});
