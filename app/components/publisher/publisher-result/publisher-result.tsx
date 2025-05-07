import { PublisherResultSummary } from '~/components/publisher/results-summary/results-summary';
import PublisherResultTable from '~/components/publisher/result-table/result-table';
import { useAppQuery } from '~/hooks/api/queries/use-app-query';
import { mapperSummaryData } from '~/mappers/publisher/funding-type-mapper';
import type {
  LocalGuarantyDonationSearch,
  LocalGuarantyDonationSearchRow
} from '~/types/publisher/publisher-search-results';
import type { PublisherResultSummaryData } from '~/types/publisher/publisher-summary-result';

export const PublisherResult = () => {
  const { data, isLoading, error } = useAppQuery<LocalGuarantyDonationSearch>({
    url: 'api/publisher/localGuarantyDonationSearch'
  });

  const tableData: LocalGuarantyDonationSearchRow[] = data?.results ?? [];
  const summaryData: PublisherResultSummaryData[] = mapperSummaryData(data);

  if (isLoading) return <p>טוען נתונים...</p>;
  if (error) return <p>שגיאה בטעינת הנתונים</p>;

  return (
    <div>
      <PublisherResultSummary items={summaryData} />
      <PublisherResultTable data={tableData} />
    </div>
  );
};

export default PublisherResult;
