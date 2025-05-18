// import styles from './results-summary.module.css';
import type { PublisherResultSummaryData as PublishResultSummaryData } from '~/types/publisher/publisher-summary-result-type';
import { DividedRowList } from '@ui/divided-row-list/divided-row-list';
import { currencyFormatter, formatHebrewNumber } from '@utils/number-utils';
// import { Image } from '@ui/image/image';
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
        // const getClassName = (baseClass: string) =>
        //   isZero ? styles[`${baseClass}-zero`] : styles[baseClass];
        return (
          <StepItem
            icon={displayIcon}
            title={titleIncludesCount ? title : `${formatHebrewNumber(count ?? 0)} ${title}`}
            subtitle={currencyFormatter.format(sum)}
          />
          // <div className={styles['results-summary-item']}>
          //   <div className={styles['results-summary-info']}>
          //     <div className={getClassName('results-summary-title')}>
          //       {titleIncludesCount ? title : `${formatHebrewNumber(count ?? 0)} ${title}`}
          //     </div>
          //     <div className={getClassName('results-summary-sum')}>
          //       {currencyFormatter.format(sum)}
          //     </div>
          //   </div>
          //   <div className={styles['results-summary-icon']}>
          //     <Image src={displayIcon} alt={`${title} icon`} />
          //   </div>
          // </div>
        );
      }}
    />
  );
};
