import type { ValidatorMessageType } from '~/types/validator-message-type';
import {
  isCheckBoxGroupRequired as validateCheckBoxGroup,
  isInputRequired as validateInuptRequired
} from '@validators/requierd-validators';
import type { ValidatorType } from '@app-types/validator-type';

const wrapRequiredValidator =
  <T>(validatorFn: (value: T) => ValidatorType) =>
  (value: T): ValidatorMessageType =>
    validatorFn(value) && 'שדה חובה';

export const isCheckBoxGroupRequired = wrapRequiredValidator(validateCheckBoxGroup);
export const isInputRequired = wrapRequiredValidator(validateInuptRequired);
