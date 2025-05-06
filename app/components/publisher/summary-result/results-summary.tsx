import './results-summary.css';
import type { PublisherResultSummaryData as PublishResultSummaryData } from '~/types/publisher/publisher-summary-result';
import { DividedRowList } from '@ui/divided-row-list/divided-row-list';
import { currencyFormatter } from '@utils/number-utils';

interface PublisherResultsSummaryProps {
    items: PublishResultSummaryData[];
}

export const PublisherResultSummary = ({ items }: PublisherResultsSummaryProps) => {
    return (
        <DividedRowList
            items={items}
            renderItem={({ title, count, sum, iconSrc }) => (
                <div className="results-summary-item">
                    <div className="results-summary-info">
                        <div className="results-summary-title">
                            {count ? `${count} ${title}` : `0 ${title}`}
                        </div>
                        <div className="results-summary-sum">{currencyFormatter.format(sum)}</div>
                    </div>
                    <div className="results-summary-icon">
                        <img src={iconSrc} alt={`${title} icon`} />
                    </div>
                </div>
            )}
        />
    );
};
