import type { DividerType } from '@app-types/enums/divider-type';

export interface SummaryResultData {
  fundingType?: number;
  title: string;
  count?: number;
  sum: number;
  iconSrc: string;
  dividerAfter?: DividerType;
}
