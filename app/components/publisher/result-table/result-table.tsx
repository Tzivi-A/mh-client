import { Card } from '@ui/card/card';
import { Table } from '@ui/table/table';
import type { ColumnsType, TableProps } from '@app-types/table-type';
import type { PublicationSearchEnum } from '~/types/enums/publication-search';
import { PublicationSearchIcons } from '~/utils/constants/publisher/publication-search';
import { Image } from '@ui/image/image';
import { parseNullableDecimal } from '@utils/number-utils';
import type { LocalPublicationResultRow } from '~/types/publisher/publisher-search-results-type';

export interface PublisherResultTableProps {
  data: LocalPublicationResultRow[];
  electionColumnsChildren: ColumnsType<LocalPublicationResultRow>;
}

export const PublisherResultTable = ({
  data,
  electionColumnsChildren
}: PublisherResultTableProps) => {
  const renderPublicationType = (record: LocalPublicationResultRow) => {
    const type = record.publicationType.id as PublicationSearchEnum;
    const title = record.publicationType.name;
    const iconSrc = PublicationSearchIcons[type]?.table;
    return (
      <div>
        {iconSrc && <Image src={iconSrc} alt={`${title} icon`} />}
        <span>{title}</span>
      </div>
    );
  };
  const columns: ColumnsType<LocalPublicationResultRow> = [
    {
      title: 'סוג מימון',
      key: 'publicationType.id',
      align: 'right',
      sorterType: 'string',
      render: (_, record) => renderPublicationType(record)
    },
    {
      title: 'מאפייני בחירות',
      key: 'electionCharacteristics',
      align: 'center',
      children: electionColumnsChildren
    },
    {
      title: 'מאפייני התורם/ המלווה/ הערב',
      key: 'entityCharacteristics',
      align: 'center',
      children: [
        {
          title: 'שם מלא',
          key: 'name',
          align: 'right',
          sorterType: 'string'
        },
        {
          title: 'ארץ',
          key: 'country',
          align: 'right',
          sorterType: 'string'
        },
        {
          title: 'ישוב',
          key: 'city',
          align: 'right',
          sorterType: 'string'
        }
      ]
    },
    {
      title: 'מאפייני התרומה/ ההלוואה/ הערבות',
      key: 'publicationCharacteristics',
      align: 'center',
      children: [
        {
          title: 'תאריך',
          key: 'publicationDate',
          align: 'right',
          sorterType: 'date',
          render: date => date?.split('T')[0]
        },
        {
          title: 'סכום',
          key: 'publicationSum',
          align: 'right',
          sorterType: 'number',
          render: amount => parseNullableDecimal(amount)
        },
        {
          title: 'יתרת הלוואה',
          key: 'loanReturnSum',
          align: 'right',
          sorterType: 'number',
          render: value => parseNullableDecimal(value)
        }
      ]
    }
  ];

  const tableProps: TableProps<LocalPublicationResultRow> = {
    data: data.map((d, idx) => ({ ...d, key: idx })),
    columns,
    loading: false,
    pagination: {
      current: 1,
      pageSize: 10,
      total: data.length,
      showSizeChanger: true,
      pageSizeOptions: [10, 25, 50, 100]
    },
    scroll: { x: 'max-content', y: 510 },
    rowKey: 'key',
    bordered: true,
    showHeader: true
  };

  return (
    <div>
      <Card>
        <Table {...tableProps} />
      </Card>
    </div>
  );
};

export default PublisherResultTable;
