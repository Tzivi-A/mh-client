import { Table as AntTable } from 'antd';
import type { ColumnsType } from 'antd/es/table';

export interface TableProps<T> {
  data: T[];
  columns: ColumnsType<T>;
  loading?: boolean;
  pagination?: boolean;
  onRowClick?: (record: T) => void;
  onPageChange?: (page: number, pageSize: number) => void;
  pageSize?: number;
  page?: number;
  rowKey?: string;
  bordered?: boolean;
  scroll?: { x?: number; y?: number };
  size?: 'small' | 'middle' | 'large' | undefined;
  title?: string;
  footer?: string;
  showHeader?: boolean;
  sticky?: boolean;
  className?: string;
}

export const Table = <T,>({
  data,
  columns = Object.keys(data[0] || {}).map(key => ({
    title: key,
    dataIndex: key,
    key: key
  })),
  loading = false,
  pagination = true,
  onRowClick,
  onPageChange,
  pageSize = 10,
  page = 1,
  rowKey = 'key',
  bordered = false,
  scroll,
  size = 'middle',
  title,
  footer,
  showHeader = true,
  sticky = false,
  className
}: TableProps<T>) => {
  const handleRowClick = (record: T) => {
    if (onRowClick) {
      onRowClick(record);
    }
  };

  const handlePageChange = (page: number, pageSize: number) => {
    if (onPageChange) {
      onPageChange(page, pageSize);
    }
  };

  return (
    <AntTable
      dataSource={data}
      columns={columns}
      loading={loading}
      pagination={pagination ? { pageSize, current: page, onChange: handlePageChange } : false}
      onRow={record => ({
        onClick: () => handleRowClick(record)
      })}
      rowKey={rowKey}
      bordered={bordered}
      scroll={scroll}
      size={size}
      title={() => title}
      footer={() => footer}
      showHeader={showHeader}
      sticky={sticky}
      className={className}
    />
  );
};

export default Table;
