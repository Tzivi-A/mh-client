import PublisherBanner from '~/components/publisher/banner/banner';
import PublisherResult from '~/components/publisher/publisher-result/publisher-result';

export const PublisherPage = () => {
  return (
    <div>
      <h1>תרומות, ערבויות והלוואות לסיעות בבחירות לרשויות מקומיות</h1>
      <span>המידע על התרומות מפורסם בהסתמך על הדיווח של המועמד בלבד ועל אחריותו.</span>
      <h3>חיפוש תרומה/ ערבות/ הלוואה</h3>
      <PublisherBanner />
      <PublisherResult />
    </div>
  );
};

export default PublisherPage;
