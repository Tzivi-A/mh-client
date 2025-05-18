import type { PublisherResultSummaryData as PublishResultSummaryData } from '~/types/publisher/publisher-summary-result-type';
import { DividedRowList } from '@ui/divided-row-list/divided-row-list';
import { currencyFormatter, formatHebrewNumber } from '@utils/number-utils';
import { PublicationSearchIcons } from '~/utils/constants/publisher/publication-search';
import { StepItem } from '@ui/step-item/step-item';

interface PublisherResultsSummaryProps {
  items: PublishResultSummaryData[];
}

export const PublisherResultSummary = ({ items }: PublisherResultsSummaryProps) => {
  return (
    <DividedRowList
      items={items}
      renderItem={({ sumTitle: title, count, sum, titleIncludesCount, publicationSearchType }) => {
        const isZero = sum === 0;
        const displayIcon = isZero
          ? PublicationSearchIcons[publicationSearchType].zero
          : PublicationSearchIcons[publicationSearchType].normal;
        return (
          <StepItem
            icon={displayIcon}
            title={titleIncludesCount ? title : `${formatHebrewNumber(count ?? 0)} ${title}`}
            subtitle={currencyFormatter.format(sum)}
            isActive={!isZero}
          />
        );
      }}
    />
  );
};
