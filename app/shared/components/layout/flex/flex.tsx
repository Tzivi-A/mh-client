import type { ReactNode } from 'react';
import styles from './flex.module.css';

export interface FlexProps {
  direction?: 'row' | 'column';
  children: ReactNode;
  className?: string;
  width?: string | number;
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
}

export const Flex = ({
  children,
  direction = 'row',
  className,
  width = '',
  justify,
  align
}: FlexProps) => {
  return (
    <div
      className={`${styles.flex} ${direction === 'column' ? styles['flex-direction-column'] : ''}
      ${className}`}
      style={
        {
          '--flex-width': typeof width === 'number' ? `${width}px` : width,
          '--flex-justify': justify,
          '--flex-align': align
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};
