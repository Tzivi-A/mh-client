import { Card } from '~/components/card/card';
import { Table, type TableProps } from '../../components/table/table';
import type { PublishResult } from '~/types/publish-result';
import { FundingTypeEnum } from '~/enums/funding-type';
import type { ColumnsType } from 'antd/es/table';
import { sorterString, sorterStringDate } from '~/utils/utils';

export const RegistrationPage = () => {
  const data: PublishResult[] = [
    {
      ID: '1',
      FundingType: { ID: FundingTypeEnum.Donation, Name: 'תרומה' },
      Faction: 'יש עתיד',
      ElectionCity: 'ביתר',
      ElectionDate: '10/2/2025',
      FullName: 'אלון פוטרמן',
      Country: 'אנגליה',
      EntityCity: 'ישוב אנגלי',
      FundingDate: '26/12/2022',
      FundingAmount: 1000.0
    },
    {
      ID: '2',
      FundingType: { ID: FundingTypeEnum.Loan, Name: 'הלוואה' },
      Faction: 'המאוחדת',
      ElectionCity: 'מודיעין עילית',
      ElectionDate: '18/1/2025',
      FullName: 'אפרים כץ',
      Country: 'ישראל',
      EntityCity: 'בן שמן (מושב)',
      FundingDate: '1/3/2025',
      FundingAmount: 1000.2,
      LoanBalance: 100000.0
    },
    {
      ID: '3',
      FundingType: { ID: FundingTypeEnum.Guarantee, Name: 'ערבות' },
      Faction: 'הכי הכי',
      ElectionCity: 'ירושלים',
      ElectionDate: '23/10/2024',
      FullName: 'בנימין דוד',
      Country: 'ישראל',
      EntityCity: 'אופקים',
      FundingDate: '12/03/2023',
      FundingAmount: 234.0
    },
    {
      ID: '4',
      FundingType: { ID: FundingTypeEnum.Loan, Name: 'הלוואה' },
      Faction: 'הסיעה שלנו',
      ElectionCity: 'בני ברק',
      ElectionDate: '27/7/2020',
      FullName: 'משה ברקת',
      Country: 'ישראל',
      EntityCity: 'נתניה',
      FundingDate: '23/02/2025',
      FundingAmount: 18.0,
      LoanBalance: 18.0
    }
  ];

  const columns: ColumnsType<PublishResult> = [
    {
      title: 'סוג מימון',
      dataIndex: 'FundingType',
      key: 'fundingType',
      filters: Array.from(new Set(data.map(d => d.FundingType.Name))).map(name => ({
        text: name,
        value: name
      })),
      onFilter: (value, record) => record.FundingType.Name === value,
      sorter: (a, b) => sorterString(a.FundingType.Name, b.FundingType.Name),
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
          sorter: (a, b) => sorterString(a.Faction, b.Faction)
        },
        {
          title: 'ישוב',
          dataIndex: 'ElectionCity',
          key: 'electionCity',
          align: 'right',
          sorter: (a, b) => sorterString(a.ElectionCity, b.ElectionCity)
        },
        {
          title: 'תאריך בחירות',
          dataIndex: 'ElectionDate',
          key: 'electionDate',
          align: 'right',
          sorter: (a, b) => sorterStringDate(a.ElectionDate, b.ElectionDate)
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
          sorter: (a, b) => sorterString(a.FullName, b.FullName)
        },
        {
          title: 'ארץ',
          dataIndex: 'Country',
          key: 'country',
          align: 'right',
          sorter: (a, b) => sorterString(a.Country, b.Country)
        },
        {
          title: 'ישוב',
          dataIndex: 'EntityCity',
          key: 'entityCity',
          align: 'right',
          sorter: (a, b) => sorterString(a.EntityCity, b.EntityCity)
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
          sorter: (a, b) => sorterStringDate(a.FundingDate, b.FundingDate)
        },
        {
          title: 'סכום',
          dataIndex: 'FundingAmount',
          key: 'fundingAmount',
          align: 'right',
          sorter: (a, b) => a.FundingAmount - b.FundingAmount,
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
          sorter: (a, b) => (a.LoanBalance ?? 0) - (b.LoanBalance ?? 0),
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
    data: data.map(d => ({ ...d, key: d.ID })),
    columns,
    loading: false,
    pagination: {
      current: 1,
      pageSize: 10,
      total: data.length,
      showSizeChanger: true,
      pageSizeOptions: ['10', '25', '50', '100']
    },
    scroll: { x: 'max-content', y: 510 },
    rowKey: 'key',
    bordered: true,
    size: 'middle',
    showHeader: true
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <Card>
        <Table {...tableProps} />
      </Card>
    </div>
  );
};
