import type { ReactNode } from 'react';

export interface Step {
  id: number;
  title: string;
  component: () => ReactNode;
}