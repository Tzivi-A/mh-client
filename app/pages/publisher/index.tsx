import { SummaryResults } from '~/components/publisher/summary-result/summary-results';
import PublisherBanner from '../../components/publisher/banner/publisher-banner';
import type { SummaryResultData } from "~/types/publish-summary-result";
import DonationIcon from '~/assets/images/DonationIcon.svg';
import { DividerType } from '@app-types/enums/divider-type';
import { PublishResultTable } from '~/components/publisher/table-result/table-result';
import { useAppQuery } from '~/hooks/api/queries/use-app-query';
import type { PublishResult } from '~/types/publish-result';

export const summaryData: SummaryResultData[] = [
  { title: 'רשומות', count: 45, sum: 657416.20, iconSrc: DonationIcon, dividerAfter: DividerType.Line },
  { title: 'הלוואות', count: 9, sum: 53000.00, iconSrc: DonationIcon, dividerAfter: DividerType.Line },
  { title: 'ערבויות', count: 1, sum: 10000.00, iconSrc: DonationIcon, dividerAfter: DividerType.Arrow },
  { title: 'תרומות', count: 35, sum: 112416.24, iconSrc: DonationIcon },
];


export const PublisherPage = () => {
  const publishResult = useAppQuery<PublishResult[]>({
    url: 'api/publisher/localGuarantyDonationSearch'
  });
  return (
    <div>
      <h1>תרומות, ערבויות והלוואות לסיעות בבחירות לרשויות מקומיות</h1>
      <span>המידע על התרומות מפורסם בהסתמך על הדיווח של המועמד בלבד ועל אחריותו.</span>
      <h3>חיפוש תרומה/ ערבות/ הלוואה</h3>
      <PublisherBanner />
      <SummaryResults items={summaryData} />
      <PublishResultTable publishResult={publishResult} loading={!publishResult} />
    </div>
  );
};

export default PublisherPage;
