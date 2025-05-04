// DashboardStats.tsx
import React from 'react';
import './summary-results.css';
import { Card } from '@ui/card/card';
import type { SummaryResult } from '~/types/publish-summary-result';

interface SummaryResultProps {
    items: SummaryResult[];
}

export const SummaryResults: React.FC<SummaryResultProps> = ({ items }) => (
    <div className="dashboard-stats">
        {items.map(({ title, count, sum
            , icon 
        }) => (
            <Card key={title}>
                <div className="stat">
                    <div>
                        <div className="stat-title">{count != null && ` ${count}`} {title}</div>
                        <div className="stat-sum">{sum.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                    </div>
                    <div className="stat-icon">{icon}</div>
                </div>
            </Card>
        ))}
    </div>
);
