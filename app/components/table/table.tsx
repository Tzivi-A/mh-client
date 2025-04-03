// create componnet Table by use Table from antd
import React from 'react';
import { Table as AntTable } from 'antd';
import type { ColumnsType } from 'antd/es/table';

export interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  description: string;
  date: string;
  time: string;
  status: string;
}

export interface TableProps {
  data: DataType[];
  columns: ColumnsType<DataType>;
  loading?: boolean;
  pagination?: boolean;
  onRowClick?: (record: DataType) => void;
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

export const Table: React.FC<TableProps> = ({
  data,
  columns,
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
}) => {
  const handleRowClick = (record: DataType) => {
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
