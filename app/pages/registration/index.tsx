import { Table, type TableProps } from '../../components/table/table';

export const RegistrationPage = () => {
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: '10 Downing Street',
      tags: ['active'],
      description: 'A description for John Brown',
      date: '2023-01-01',
      time: '10:00 AM',
      status: 'active'
    },
    {
      key: '2',
      name: 'Jane Smith',
      age: 28,
      address: '20 Oxford Street',
      tags: ['inactive'],
      description: 'A description for Jane Smith',
      date: '2023-01-02',
      time: '11:00 AM',
      status: 'inactive'
    }
  ] as TableProps['data'];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    }
  ] as TableProps['columns'];

  const tableProps = {
    data,
    columns,
    loading: false,
    pagination: true,
    pageSize: 1,
    page: 2,
    rowKey: 'key',
    bordered: false,
    scroll: { x: 1000, y: 500 },
    size: 'middle',
    title: 'Registration Table',
    footer: 'Footer text',
    showHeader: true,
    sticky: false
  } as TableProps;

  return (
    <div>
      <h1>Registration Page</h1>
      <Table {...tableProps} />
    </div>
  );
};
