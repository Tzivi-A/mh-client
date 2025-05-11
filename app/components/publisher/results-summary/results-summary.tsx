import './results-summary.css';
import type { PublisherResultSummaryData as PublishResultSummaryData } from '~/types/publisher/publisher-summary-result-type';
import { DividedRowList } from '@ui/divided-row-list/divided-row-list';
import { currencyFormatter, formatHebrewNumber } from '@utils/number-utils';
import { Image } from '@ui/image/image';
import { PublicationSearchIcons } from '~/utils/constants/publisher/publication-search';

interface PublisherResultsSummaryProps {
  items: PublishResultSummaryData[];
}

export const PublisherResultSummary = ({ items }: PublisherResultsSummaryProps) => {
  return (
    <DividedRowList
      items={items}
      renderItem={({ title, count, sum, titleIncludesCount, publicationSearchType }) => {
        const isZero = sum === 0;
        const displayIcon = isZero
          ? PublicationSearchIcons[publicationSearchType].zero
          : PublicationSearchIcons[publicationSearchType].normal;
        return (
          <div className="results-summary-item">
            <div className="results-summary-info">
              <div className="results-summary-title">
                {titleIncludesCount ? title : `${formatHebrewNumber(count ?? 0)} ${title}`}
              </div>
              <div className="results-summary-sum">{currencyFormatter.format(sum)}</div>
            </div>
            <div className="results-summary-icon">
              <Image src={displayIcon} alt={`${title} icon`} />
            </div>
          </div>
        );
      }}
    />
  );
};
