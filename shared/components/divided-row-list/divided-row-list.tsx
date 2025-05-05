import React from 'react';
import './divided-row-list.css'
import { DividerType } from '~/types/publish-summary-result';
import arrowSrc from '~/assets/images/arrow.svg';

export interface HorizontalListProps<T extends { dividerAfter?: DividerType }> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    defaultDivider?: DividerType;
}

export const DividedRowList = <T extends { dividerAfter?: DividerType }>({
    items,
    renderItem,
    defaultDivider,
}: HorizontalListProps<T>) => (
    <div className="divided-row-list">
        {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            const divider = item.dividerAfter ?? defaultDivider;
            return (
                <React.Fragment key={idx}>
                    <div className="divided-row-list_item">
                        {renderItem(item, idx)}
                    </div>

                    {!isLast && divider === DividerType.Line && (
                        <div className="divided-row-list_divider divided-row-list_divider--line" />
                    )}
                    {!isLast && divider === DividerType.Arrow && (
                        <div className="divided-row-list_divider divided-row-list-arrow">
                            <img
                                src={arrowSrc}
                                className="divided-row-list_arrow"
                            />
                        </div>
                    )}
                </React.Fragment>
            );
        })}
    </div>
);
