import type { ComponentType } from 'react';

export interface Step {
  id: number;
  title: string;
  component: () => Promise<{ default: ComponentType }>;
}