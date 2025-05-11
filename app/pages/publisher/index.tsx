import { useState } from 'react';
import PublisherBanner from '~/components/publisher/banner/banner';
import PublisherResult from '~/components/publisher/publisher-result/publisher-result';
import type { LocalPublicationResults } from '~/types/publisher/publisher-search-results-type';

export const PublisherPage = () => {
  const [searchData, setSearchData] = useState<LocalPublicationResults>();

  return (
    <div>
      <h1>תרומות, ערבויות והלוואות לסיעות בבחירות לרשויות מקומיות</h1>
      <span>המידע על התרומות מפורסם בהסתמך על הדיווח של המועמד בלבד ועל אחריותו.</span>
      <h3>חיפוש תרומה/ ערבות/ הלוואה</h3>
      <PublisherBanner setSearchData={setSearchData} />
      {searchData && <PublisherResult data={searchData} />}
    </div>
  );
};
export default PublisherPage;
