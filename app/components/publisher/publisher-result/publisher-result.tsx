import { useMemo, useState } from 'react';
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
import type { Option } from '@app-types/option-type';
import { CheckBoxGroup } from '@ui/form/check-box/check-box-group/check-box-group';
import NoResults from '@ui/no-results/no-results';

export interface PublisherResultProps {
  data?: LocalPublicationResults;
}

export const PublisherResult = ({ data }: PublisherResultProps) => {
  const tableData: LocalPublicationResultRow[] = data?.results ?? [];
  const summaryData: PublisherResultSummaryData[] = mapperSummaryData(data);

  // Generate publication-type-filter options once
  const publicationTypeOptions: Option[] = useMemo(() => {
    const uniqueOptions = new Map<number, Option>();

    tableData.forEach(row => {
      const { id, name } = row.publicationType ?? {};
      if (id !== null && !uniqueOptions.has(id)) {
        uniqueOptions.set(id, { value: id, label: name });
      }
    });

    return Array.from(uniqueOptions.values());
  }, [tableData]);

  // Init all types selected by default
  const [publicationTypesFilter, setPublicationTypesFilter] = useState(() =>
    publicationTypeOptions.map(opt => opt.value)
  );

  // Filter data based on selected types
  const filteredData = useMemo(() => {
    if (publicationTypesFilter.length === 0) {
      return [];
    }
    return tableData.filter(row => {
      const id = row.publicationType?.id;
      return id !== null && publicationTypesFilter.includes(id);
    });
  }, [tableData, publicationTypesFilter]);

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
      <CheckBoxGroup
        id="publication-type-filter"
        options={publicationTypeOptions}
        value={publicationTypesFilter}
        onChange={setPublicationTypesFilter}
        flexDirection="row"
      />
      <Section header="שימו לב: ניתן להציג עד 1000 רשומות. מוצגות בטבלה 1000 האחרונות, נא לצמצם את נתוני החיפוש.">
        <PublisherResultTable data={filteredData} electionColumnsChildren={localElectionColumns} />
      </Section>
    </div>
  );
};

export default PublisherResult;
