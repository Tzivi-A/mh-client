import { useState } from 'react';
import { PublisherResultSummary } from '~/components/publisher/results-summary/results-summary';
import PublisherResultTable from '~/components/publisher/result-table/result-table';
import type { PublisherResultSummaryData } from '~/types/publisher/publisher-summary-result-type';
import { mapperSummaryData } from '~/mappers/publisher/publication-search-mapper';
import type { ColumnsType } from '@app-types/table-type';
import type {
  LocalPublicationResultRow,
  LocalPublicationResults
} from '~/types/publisher/publisher-search-results-type';
import Section from '@ui/section/section';
import NoResults from '@ui/no-results/no-results';
import PublicationFilter from '../publication-filter/publication-filter';

export interface PublisherResultProps {
  data?: LocalPublicationResults;
}

export const PublisherResult = ({ data }: PublisherResultProps) => {
  const tableData: LocalPublicationResultRow[] = data?.results ?? [];
  const summaryData: PublisherResultSummaryData[] = mapperSummaryData(data);
  const [filteredData, setFilteredData] = useState<LocalPublicationResultRow[]>(tableData);

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

  if (data?.results?.length === 0) {
    return <NoResults />;
  }

  return (
    <div>
      <PublisherResultSummary items={summaryData} />
      <PublicationFilter tableData={tableData} onFilterChange={setFilteredData} />
      <Section header="שימו לב: ניתן להציג עד 1000 רשומות. מוצגות בטבלה 1000 האחרונות, נא לצמצם את נתוני החיפוש.">
        <PublisherResultTable data={filteredData} electionColumnsChildren={localElectionColumns} />
      </Section>
    </div>
  );
};

export default PublisherResult;
