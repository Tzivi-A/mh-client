import { PublisherResultSummary } from '~/components/publisher/summary-result/results-summary';
import PublisherBanner from '../../components/publisher/banner/publisher-banner';
import { useAppQuery } from '~/hooks/api/queries/use-app-query';
import type { PublisherResultSummaryData } from '~/types/publisher/publisher-summary-result';
import type { LocalGuarantyDonationSearch } from '~/types/publisher/publisher-search-results';
import { mapperSummaryData } from '~/mappers/publisher/funding-type-mapper';

export const PublisherPage = () => {
  const summaryData = useAppQuery<LocalGuarantyDonationSearch, PublisherResultSummaryData[]>({
    url: 'api/publisher/localGuarantyDonationSearch',
    mapResponse: mapperSummaryData
  });
  return (
    <div>
      <h1>תרומות, ערבויות והלוואות לסיעות בבחירות לרשויות מקומיות</h1>
      <span>המידע על התרומות מפורסם בהסתמך על הדיווח של המועמד בלבד ועל אחריותו.</span>
      <h3>חיפוש תרומה/ ערבות/ הלוואה</h3>
      <PublisherBanner />
      <PublisherResultSummary items={summaryData.data ?? []} />
    </div>
  );
};

export default PublisherPage;
