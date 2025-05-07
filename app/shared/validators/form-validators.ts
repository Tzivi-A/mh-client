import type { validatorType } from '@app-types/validator';

export const validateAtLeastOneFieldFilled = <T extends object>(value: T): validatorType => {
  const isAllEmpty =
    Object.keys(value).length === 0 ||
    Object.values(value).every(v => v === null || v === undefined || v === '');

  return isAllEmpty ? true : undefined;
};

export const validateAtLeastOneExtraField = <T extends object>(
  value: T,
  excludeKeys: (keyof T)[]
): validatorType => {
  const isAllExtraEmpty = Object.entries(value).every(([key, val]) => {
    if (excludeKeys.includes(key as keyof T)) return true;
    return val === null || val === undefined || val === '';
  });

  return isAllExtraEmpty ? true : undefined;
};
