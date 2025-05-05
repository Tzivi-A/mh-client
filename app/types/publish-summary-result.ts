import type { DividerType } from "@app-types/enums/divider-type";

export interface SummaryResultData {
  title: string;
  count?: number;
  sum: number;
  iconSrc: string;
  dividerAfter?: DividerType;
}
