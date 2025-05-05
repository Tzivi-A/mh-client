export interface SummaryResultData {
  title: string;
  count?: number;
  sum: number;
  iconSrc: string;
  dividerAfter?: DividerType;
}

export enum DividerType {
  Line  = 'line',
  Arrow = 'arrow',
}