import type { ValidatorType } from '@app-types/validator-type';

export const isCheckBoxGroupRequired = <T>(group?: T[]): ValidatorType =>
  !group || !group.length ? true : undefined;

export const isInputRequired = (input?: string): ValidatorType => (!input ? true : undefined);
