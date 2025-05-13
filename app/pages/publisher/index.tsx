import { useState } from 'react';
import PublisherBanner from '~/components/publisher/banner/banner';
import PublisherResult from '~/components/publisher/publisher-result/publisher-result';
import MHHeader from '~/components/mh-header/mh-header';
import type { LocalPublicationResults } from '~/types/publisher/publisher-search-results-type';

export const PublisherPage = () => {
  const [searchData, setSearchData] = useState<LocalPublicationResults>();

  return (
    <div>
      <MHHeader title={'תרומות, ערבויות והלוואות לסיעות בבחירות לרשויות מקומיות'} isLink={true} />
      <h1>חיפוש תרומה/ ערבות/ הלוואה</h1>
      <span>המידע על התרומות מפורסם בהסתמך על הדיווח של המועמד בלבד ועל אחריותו.</span>
      <PublisherBanner setSearchData={setSearchData} />
      {searchData && <PublisherResult data={searchData} />}
    </div>
  );
};
export default PublisherPage;
