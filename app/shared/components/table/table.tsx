import { Table as AntTable } from 'antd';
import { useState } from 'react';
import type { ColumnGroupType, ColumnsType, ColumnType, TableProps } from '@app-types/table-type';
import { sorterFunctions } from '@utils/table-utils';
import get from 'lodash/get';

export const Table = <RecordType,>({
  data,
  columns,
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
}: TableProps<RecordType>) => {
  const [pageSize, setPageSize] = useState(pagination?.pageSize ?? 10);
  const [currentPage, setCurrentPage] = useState(pagination?.current ?? 1);

  const handlePageChange = (page: number, pageSize: number) => {
    setPageSize(pageSize);
    setCurrentPage(page);
    pagination?.onPageChange?.(page, pageSize);
  };

  const isNotColumnGroupType = (
    column: ColumnType<RecordType> | ColumnGroupType<RecordType>
  ): column is ColumnType<RecordType> => {
    return !('children' in column);
  };

  // Enhance columns with sorting logic based on sorterType and sorterName
  const processColumns = (columns: ColumnsType<RecordType>): ColumnsType<RecordType> => {
    return columns.map(column => {
      if (isNotColumnGroupType(column)) {
        if (column.sorterType) {
          column.sorter = (a, b) => {
            const valueA = column.sorterName
              ? get(a, column.sorterName as string)
              : a[column.dataIndex as keyof RecordType];
            const valueB = column.sorterName
              ? get(b, column.sorterName as string)
              : b[column.dataIndex as keyof RecordType];
            return sorterFunctions[column.sorterType ?? 'undefined'](valueA, valueB);
          };
        }
      } else if (column.children) {
        // Recursively process child columns
        column.children = processColumns(column.children);
      }
      return column;
    });
  };
  const enhancedColumns = processColumns(columns);

  return (
    <AntTable<RecordType>
      dataSource={data}
      columns={enhancedColumns}
      loading={loading}
      pagination={
        pagination
          ? {
              current: currentPage,
              pageSize,
              total: data.length,
              showSizeChanger: pagination.showSizeChanger,
              pageSizeOptions: pagination.pageSizeOptions,
              onShowSizeChange: (page: number, pageSize: number) => {
                handlePageChange(page, pageSize);
                pagination.onShowSizeChange?.(page, pageSize);
              },
              onChange: (page: number, pageSize: number) => {
                handlePageChange(page, pageSize);
                pagination.onChange?.(page, pageSize);
              },
              hideOnSinglePage: !pagination?.showSizeChanger
            }
          : false
      }
      onRow={record => ({
        onClick: () => onRowClick?.(record)
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
