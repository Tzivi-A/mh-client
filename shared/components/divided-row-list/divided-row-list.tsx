import React from 'react';
import './divided-row-list.css';
import { Divider } from './divider';
import type { DividerType } from '@app-types/enums/divider-type';

export interface DividedRowListProps<T extends { dividerAfter?: DividerType }> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  defaultDivider?: DividerType;
}

export const DividedRowList = <T extends { dividerAfter?: DividerType }>({
  items,
  renderItem,
  defaultDivider
}: DividedRowListProps<T>) => (
  <div className="divided-row-list">
    {items.map((item, idx) => {
      const isLast = idx === items.length - 1;
      const divider = item.dividerAfter ?? defaultDivider;
      return (
        <React.Fragment key={idx}>
          <div className="divided-row-list_item">{renderItem(item, idx)}</div>
          {!isLast && <Divider type={divider} />}
        </React.Fragment>
      );
    })}
  </div>
);
