import PublisherBanner from '../../components/publisher/banner/publisher-banner';
import { SummaryResults } from '@ui/summary-results/summary-results';
import { stats } from '@ui/summary-results/summary-results-data';

export const PublisherPage = () => {
  return (
    <div>
      <h1>תרומות, ערבויות והלוואות לסיעות בבחירות לרשויות מקומיות</h1>
      <span>המידע על התרומות מפורסם בהסתמך על הדיווח של המועמד בלבד ועל אחריותו.</span>
      <h3>חיפוש תרומה/ ערבות/ הלוואה</h3>
      <PublisherBanner />
      <SummaryResults items={stats} />
    </div>
  );
};

export default PublisherPage;
