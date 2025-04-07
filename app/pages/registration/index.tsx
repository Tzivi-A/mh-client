import { Card } from '~/components/card/card';
import { Table, type TableProps } from '../../components/table/table';
import { Tag } from 'antd';

export interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  description: string;
  dateTime: string;
  date: string;
  time: string;
  status: string;
}

export const RegistrationPage = () => {
  const data = Array.from({ length: 50 }, (_, index) => ({
    key: (index + 1).toString(),
    name: `User ${index + 1}`,
    age: 20 + (index % 30),
    address: `${index + 1} Example Street`,
    tags: 20 + (index % 30) > 30 ? ['active'] : ['inactive'],
    description: `A description for User ${index + 1}`,
    dateTime: '',
    date: `2023-01-${String((index % 31) + 1).padStart(2, '0')}`,
    time: `${(index % 12) + 1}:00 ${index % 2 === 0 ? 'AM' : 'PM'}`,
    status: 20 + (index % 30) > 30 ? 'active' : 'inactive'
  })) as DataType[];

  const tableProps = {
    data,
    columns: Object.keys(data[0] || {})
      .filter(key => !['key', 'date', 'time'].includes(key))
      .map((key, index) => ({
        title: key.charAt(0).toUpperCase() + key.slice(1),
        dataIndex: key,
        key: (index + 1).toString(),
        render: (_, record) => {
          if (key === 'tags') {
            return (
              <>
                {record.tags.map(tag => {
                  const color = tag === 'inactive' ? 'volcano' : 'green';
                  return (
                    <Tag color={color} key={tag}>
                      {tag.toUpperCase()}
                    </Tag>
                  );
                })}
              </>
            );
          }
          return <span>{record[key]}</span>;
        },
        children:
          key === 'dateTime'
            ? [
                {
                  title: 'Date',
                  dataIndex: 'date',
                  key: ((index + 1) * data.length).toString()
                },
                {
                  title: 'Time',
                  dataIndex: 'time',
                  key: ((index + 1) * data.length + 1).toString()
                }
              ]
            : undefined
      })),
    loading: false,
    pagination: {
      current: 1,
      pageSize: 5,
      total: data.length,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '30', '40']
    },
    scroll: { x: 'max-content', y: 510 },
    rowKey: 'key',
    bordered: true,
    size: 'middle',
    showHeader: true
  } as TableProps<DataType>;

  return (
    <div>
      <h1>Registration Page</h1>
      <Card>
        <Table {...tableProps} />
      </Card>
    </div>
  );
};
