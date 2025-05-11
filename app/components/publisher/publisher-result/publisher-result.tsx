import { PublisherResultSummary } from '~/components/publisher/results-summary/results-summary';
import PublisherResultTable from '~/components/publisher/result-table/result-table';
import type { PublisherResultSummaryData } from '~/types/publisher/publisher-summary-result-type';
import { mapperSummaryData } from '~/mappers/publisher/publication-search-mapper';
import { useAppQuery } from '~/shared/hooks/use-app-query';
import type {
  LocalGuarantyDonationSearch,
  LocalGuarantyDonationSearchRow
} from '~/types/publisher/publisher-search-results-type';
import type { ColumnsType } from '~/shared/types/table-type';

export const PublisherResult = () => {
  const { data, isLoading, error } = useAppQuery<LocalGuarantyDonationSearch>({
    url: 'api/publisher/localGuarantyDonationSearch'
  });

  const tableData: LocalGuarantyDonationSearchRow[] = data?.results ?? [];
  const summaryData: PublisherResultSummaryData[] = mapperSummaryData(data);
  const localElectionColumns: ColumnsType<LocalGuarantyDonationSearchRow> = [
    {
      title: 'סיעה',
      dataIndex: 'electionFaction',
      key: 'electionFaction',
      align: 'right',
      sorterType: 'string'
    },
    {
      title: 'ישוב',
      dataIndex: 'electionCity',
      key: 'electionCity',
      align: 'right',
      sorterType: 'string'
    },
    {
      title: 'תאריך בחירות',
      dataIndex: 'electionDate',
      key: 'electionDate',
      align: 'right',
      sorterType: 'date',
      render: date => date?.split('T')[0]
    }
  ];

  if (isLoading) return <p>טוען נתונים...</p>;
  if (error) return <p>שגיאה בטעינת הנתונים</p>;

  return (
    <div>
      <PublisherResultSummary items={summaryData} />
      <PublisherResultTable data={tableData} electionColumnsChildren={localElectionColumns} />
    </div>
  );
};

export default PublisherResult;
