import type { ReactNode } from 'react';
import styles from './flex.module.css';

export interface FlexProps {
  direction?: 'row' | 'column';
  children: ReactNode;
  width?: string | number;
}

export const Flex = ({ children, direction = 'row', width = '' }: FlexProps) => {
  return (
    <div
      className={`${styles.flex} ${direction === 'column' ? styles['flex-direction-column'] : ''}`}
      style={
        { '--flex-width': typeof width === 'number' ? `${width}px` : width } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};
