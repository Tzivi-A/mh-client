import { Card } from '~/components/card/card';
import { Table } from '../../components/table/table';
import type { PublishResult } from '~/types/publish-result';
import { FundingTypeEnum } from '~/enums/funding-type';
import { useAppQuery } from '~/hooks/use-app-query';
import type { ColumnsType, TableProps } from '~/types/table';

export const PublisherPage = () => {
  const publishResult = useAppQuery<PublishResult[]>({
    url: 'api/publisher/localGuarantyDonationSearch'
  });

  if (publishResult.isLoading) return <p>Loading publishResult data...</p>;
  if (publishResult.error) return <p>Error loading publishResult data</p>;

  const columns: ColumnsType<PublishResult> = [
    {
      title: 'סוג מימון',
      dataIndex: 'FundingType',
      key: 'fundingType',
      filters: Array.from(new Set(publishResult.data?.map(d => d.FundingType.Name))).map(name => ({
        text: name,
        value: name
      })),
      onFilter: (value, record) => record.FundingType.Name === value,
      sorterType: 'string',
      sorterName: 'FundingType.Name',
      render: fundingType => {
        const icons = {
          [FundingTypeEnum.Donation]: 1,
          [FundingTypeEnum.Loan]: 2,
          [FundingTypeEnum.Guarantee]: 3
        };
        const icon = icons[fundingType.ID] || -1;

        return (
          <span>
            icon: {icon} {fundingType.Name}
          </span>
        );
      },
      align: 'right'
    },
    {
      title: 'מאפייני בחירות',
      key: 'electionCharacteristics',
      align: 'center',
      children: [
        {
          title: 'סיעה',
          dataIndex: 'Faction',
          key: 'faction',
          align: 'right',
          sorterType: 'string'
        },
        {
          title: 'ישוב',
          dataIndex: 'ElectionCity',
          key: 'electionCity',
          align: 'right',
          sorterType: 'string'
        },
        {
          title: 'תאריך בחירות',
          dataIndex: 'ElectionDate',
          key: 'electionDate',
          align: 'right',
          sorterType: 'date'
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
          dataIndex: 'FullName',
          key: 'fullName',
          align: 'right',
          sorterType: 'string'
        },
        {
          title: 'ארץ',
          dataIndex: 'Country',
          key: 'country',
          align: 'right',
          sorterType: 'string'
        },
        {
          title: 'ישוב',
          dataIndex: 'EntityCity',
          key: 'entityCity',
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
          dataIndex: 'FundingDate',
          key: 'fundingDate',
          align: 'right',
          sorterType: 'date'
        },
        {
          title: 'סכום',
          dataIndex: 'FundingAmount',
          key: 'fundingAmount',
          align: 'right',
          sorterType: 'number',
          render: amount =>
            amount.toLocaleString('he-IL', {
              style: 'decimal',
              minimumFractionDigits: 2
            })
        },
        {
          title: 'יתרת הלוואה',
          dataIndex: 'LoanBalance',
          key: 'loanBalance',
          align: 'right',
          sorterType: 'number',
          render: balance =>
            balance &&
            balance.toLocaleString('he-IL', {
              style: 'decimal',
              minimumFractionDigits: 2
            })
        }
      ]
    }
  ];

  const tableProps: TableProps<PublishResult> = {
    data: (publishResult.data ?? []).map(d => ({ ...d, key: d.ID })),
    columns,
    loading: false,
    pagination: {
      current: 1,
      pageSize: 10,
      total: publishResult.data?.length,
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
      <h1>Publishing Page</h1>
      <Card>
        <Table {...tableProps} />
      </Card>
    </div>
  );
};

export default PublisherPage;
