import React from 'react';
import './summary-results.css';
import type { SummaryResultData } from '~/types/publish-summary-result';
import { DividedRowList } from '@ui/divided-row-list/divided-row-list';

interface SummaryResultsProps {
    items: SummaryResultData[];
}

export const SummaryResults: React.FC<SummaryResultsProps> = ({ items }) => (
    <DividedRowList
        items={items}
        renderItem={({ title, count, sum, iconSrc }) => (
            <div className="summary-results_item">
                <div className="summary-results_info">
                    <div className="summary-results_title">
                        {count != null ? `${count} ${title}` : title}
                    </div>
                    <div className="summary-results_sum">
                        {sum.toLocaleString(undefined, { minimumFractionDigits: 2 })} ₪
                    </div>
                </div>
                <div className="summary-results_icon">
                    <img src={iconSrc} alt={`${title} icon`} />
                </div>
            </div>
        )}
    />
);
