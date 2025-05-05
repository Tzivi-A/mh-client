// src/components/BaseRow.tsx
import React from 'react';
import './base-row.css';

export interface BaseRowProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export function BaseRow<T>({ items, renderItem }: BaseRowProps<T>) {
  return (
    <div className="base-row">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <div className="base-row__cell">
            {renderItem(item)}
          </div>
          {idx < items.length - 1 && <div className="base-row__divider" />}
        </React.Fragment>
      ))}
    </div>
  );
}
