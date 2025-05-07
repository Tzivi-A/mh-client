import { Card } from '@ui/card/card';
import { Table } from '@ui/table/table';
import type { ColumnsType, TableProps } from '@app-types/table';
import type { LocalGuarantyDonationSearchRow } from '~/types/publisher/publisher-search-results';

export interface PublisherResultTableProps {
  data: LocalGuarantyDonationSearchRow[];
}

export const PublisherResultTable = ({ data }: PublisherResultTableProps) => {
  const columns: ColumnsType<LocalGuarantyDonationSearchRow> = [
    {
      title: 'סוג מימון',
      dataIndex: 'guaranteeOrDonation',
      key: 'guaranteeOrDonation',
      sorterType: 'string',
      align: 'right'
    },
    {
      title: 'מאפייני בחירות',
      key: 'electionCharacteristics',
      align: 'center',
      children: [
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
      ]
    },
    {
      title: 'מאפייני התורם/ המלווה/ הערב',
      key: 'entityCharacteristics',
      align: 'center',
      children: [
        {
          title: 'שם מלא',
          dataIndex: 'fundingName',
          key: 'fundingName',
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
          dataIndex: 'fundingDate',
          key: 'fundingDate',
          align: 'right',
          sorterType: 'date',
          render: date => date?.split('T')[0]
        },
        {
          title: 'סכום',
          dataIndex: 'fundingSum',
          key: 'fundingSum',
          align: 'right',
          sorterType: 'number',
          render: amount =>
            parseFloat(amount).toLocaleString('he-IL', {
              style: 'decimal',
              minimumFractionDigits: 2
            })
        },
        {
          title: 'יתרת הלוואה',
          dataIndex: 'loanReturnSum',
          key: 'loanReturnSum',
          align: 'right',
          sorterType: 'number',
          render: value =>
            value
              ? parseFloat(value).toLocaleString('he-IL', {
                  style: 'decimal',
                  minimumFractionDigits: 2
                })
              : ''
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
