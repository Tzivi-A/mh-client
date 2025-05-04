import type { ReactNode } from 'react';

export interface SummaryResult {
  title: string;
  count?: number;
  sum: number;
  icon: ReactNode;
}