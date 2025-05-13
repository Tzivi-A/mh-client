import type { DividerTypeEnum } from '@app-types/enums/divider-type';

export interface PublisherResultSummaryData {
  publicationSearchType: number;
  sumTitle: string;
  count?: number;
  sum: number;
  dividerAfter?: DividerTypeEnum;
  titleIncludesCount?: boolean;
}
