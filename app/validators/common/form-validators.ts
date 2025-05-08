import { validateAtLeastOneExtraField as validateExtra } from '@validators/form-validators';
import type { ValidatorMessageType } from '~/types/validator-message-type';

export const validateAtLeastOneExtraField = <T extends object>(
  value: T,
  excludeKeys: (keyof T)[]
): ValidatorMessageType => validateExtra(value, excludeKeys) && 'יש לבחור מאפיין נוסף לחיפוש';
