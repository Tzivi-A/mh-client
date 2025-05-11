import { Card } from '@ui/card/card';
import { Table } from '@ui/table/table';
import type { ColumnsType, TableProps } from '~/shared/types/table-type';
import type { PublicationSearchEnum } from '~/types/enums/publication-search';
import type { LocalGuarantyDonationSearchRow } from '~/types/publisher/publisher-search-results-type';
import { PublicationSearchIcons } from '~/utils/constants/publisher/publication-search';
import { Image } from '@ui/image/image';
import { parseNullableNumber } from '~/shared/utils/number-utils';

export interface PublisherResultTableProps {
  data: LocalGuarantyDonationSearchRow[];
  electionColumnsChildren: ColumnsType<LocalGuarantyDonationSearchRow>;
}

export const PublisherResultTable = ({
  data,
  electionColumnsChildren
}: PublisherResultTableProps) => {
  const columns: ColumnsType<LocalGuarantyDonationSearchRow> = [
    {
      title: 'סוג מימון',
      key: 'fundingType.id',
      align: 'right',
      sorterType: 'string',
      render: (_, record) => {
        const type = record.fundingType.id as PublicationSearchEnum;
        const title = record.fundingType.name;
        const iconSrc = PublicationSearchIcons[type]?.table;
        return (
          <div>
            {iconSrc && <Image src={iconSrc} alt={`${title} icon`} />}
            <span>{title}</span>
          </div>
        );
      }
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
          dataIndex: 'publicationSearchName',
          key: 'publicationSearchName',
          align: 'right',
          sorterType: 'string'
        },
        {
          title: 'ארץ',
          dataIndex: 'country',
          key: 'country',
          align: 'right',
          sorterType: 'string'
        },
        {
          title: 'ישוב',
          dataIndex: 'city',
          key: 'city',
          align: 'right',
          sorterType: 'string'
        }
      ]
    },
    {
      title: 'מאפייני התרומה/ ההלוואה/ הערבות',
      key: 'fundingCharacteristics',
      align: 'center',
      children: [
        {
          title: 'תאריך',
          dataIndex: 'publicationSearchDate',
          key: 'publicationSearchDate',
          align: 'right',
          sorterType: 'date',
          render: date => date?.split('T')[0]
        },
        {
          title: 'סכום',
          dataIndex: 'publicationSearchSum',
          key: 'publicationSearchSum',
          align: 'right',
          sorterType: 'number',
          render: amount => parseNullableNumber(amount)
        },
        {
          title: 'יתרת הלוואה',
          dataIndex: 'loanReturnSum',
          key: 'loanReturnSum',
          align: 'right',
          sorterType: 'number',
          render: value => parseNullableNumber(value)
        }
      ]
    }
  ];

  const tableProps: TableProps<LocalGuarantyDonationSearchRow> = {
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
