import { Table as AntTable } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { ExpandableConfig } from 'antd/es/table/interface';
import { useState } from 'react';

export interface TableProps<T> {
  data: T[];
  columns: ColumnsType<T>;
  loading?: boolean;
  pagination?: {
    current?: number;
    pageSize?: number;
    total?: number;
    showSizeChanger?: boolean;
    pageSizeOptions?: number[];
    onShowSizeChange?: (current: number, pageSize: number) => void;
    onChange?: (current: number, pageSize?: number) => void;
  };
  onRowClick?: (record: T) => void;
  rowKey?: string;
  bordered?: boolean;
  scroll?: { x?: number | true | string; y?: number | string };
  size?: 'small' | 'middle' | 'large' | undefined;
  title?: string;
  footer?: string;
  showHeader?: boolean;
  sticky?: boolean;
  className?: string;
  expandable?: ExpandableConfig<T>;
}

export const Table = <T,>({
  data,
  columns = Object.keys(data[0] || {}).map(key => ({
    title: key.charAt(0).toUpperCase() + key.slice(1),
    dataIndex: key,
    key: key
  })),
  loading,
  pagination,
  onRowClick,
  rowKey = 'key',
  bordered,
  scroll,
  size = 'middle',
  title,
  footer,
  showHeader,
  sticky,
  className,
  expandable
}: TableProps<T>) => {
  const [pageSize, setPageSize] = useState(pagination?.pageSize ?? 10);
  const [currentPage, setCurrentPage] = useState(pagination?.current ?? 1);

  const handleRowClick = (record: T) => {
    if (onRowClick) {
      onRowClick(record);
    }
  };

  return (
    <AntTable<T>
      dataSource={data}
      columns={columns}
      loading={loading}
      pagination={
        pagination
          ? {
              current: currentPage,
              pageSize,
              total: data.length,
              showSizeChanger: pagination?.showSizeChanger,
              pageSizeOptions: pagination?.pageSizeOptions,
              onShowSizeChange: (current, size) => {
                setPageSize(size);
                setCurrentPage(current);
                if (pagination?.onShowSizeChange) {
                  pagination.onShowSizeChange(current, size);
                }
              },
              onChange: page => setCurrentPage(page),
              hideOnSinglePage: !pagination?.showSizeChanger
            }
          : false
      }
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
      expandable={expandable}
    />
  );
};

export default Table;
