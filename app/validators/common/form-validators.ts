import { validateAtLeastOneFieldFilled } from '@validators/form-validators';

export const validateAtLeastOneExtraField = <T extends object>(value: T): string | undefined =>
  validateAtLeastOneFieldFilled(value) && 'יש לבחור מאפיין נוסף לחיפוש';
