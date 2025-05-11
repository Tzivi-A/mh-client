import { useState } from 'react';
import { PublisherResultSummary } from '~/components/publisher/results-summary/results-summary';
import PublisherBanner from '~/components/publisher/banner/banner';
import type { PublisherResultSummaryData } from '~/types/publisher/publisher-summary-result-type';

export const PublisherPage = () => {
  const [searchData, setSearchData] = useState<PublisherResultSummaryData[]>([]);
  return (
    <div>
      <h1>תרומות, ערבויות והלוואות לסיעות בבחירות לרשויות מקומיות</h1>
      <span>המידע על התרומות מפורסם בהסתמך על הדיווח של המועמד בלבד ועל אחריותו.</span>
      <h3>חיפוש תרומה/ ערבות/ הלוואה</h3>
      <PublisherBanner setSearchData={setSearchData} />
      {searchData?.length > 0 && <PublisherResultSummary items={searchData} />}
    </div>
  );
};

export default PublisherPage;
