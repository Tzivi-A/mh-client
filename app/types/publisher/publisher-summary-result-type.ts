import type { DividerTypeEnum } from '@app-types/enums/divider-type';

export interface PublisherResultSummaryData {
  publicationSearchType: number;
  title: string;
  count?: number;
  sum: number;
  dividerAfter?: DividerTypeEnum;
  titleIncludesCount?: boolean;
}
