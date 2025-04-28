import type { ReactNode } from 'react';
import styles from './flex.module.css';

export interface FlexProps {
  direction?: 'row' | 'column';
  children: ReactNode;
}

export const Flex = ({ children, direction = 'row' }: FlexProps) => {
  return (
    <div
      className={`${styles.flex} ${direction === 'column' ? styles['flex-direction-column'] : ''}`}
    >
      {children}
    </div>
  );
};
