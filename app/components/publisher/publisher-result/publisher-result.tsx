import { PublisherResultSummary } from '~/components/publisher/results-summary/results-summary';
import PublisherResultTable from '~/components/publisher/result-table/result-table';
import type { PublisherResultSummaryData } from '~/types/publisher/publisher-summary-result-type';
import { mapperSummaryData } from '~/mappers/publisher/publication-search-mapper';
import type { ColumnsType } from '@app-types/table-type';
import type {
  LocalPublicationResultRow,
  LocalPublicationResults
} from '~/types/publisher/publisher-search-results-type';

export interface PublisherResultProps {
  data?: LocalPublicationResults;
}

export const PublisherResult = ({ data }: PublisherResultProps) => {
  const tableData: LocalPublicationResultRow[] = data?.results ?? [];
  const summaryData: PublisherResultSummaryData[] = mapperSummaryData(data);
  const localElectionColumns: ColumnsType<LocalPublicationResultRow> = [
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

  return (
    <div>
      <PublisherResultSummary items={summaryData} />
      <PublisherResultTable data={tableData} electionColumnsChildren={localElectionColumns} />
    </div>
  );
};

export default PublisherResult;
