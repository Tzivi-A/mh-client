/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table as AntTable } from 'antd';
import type { ColumnType as AntColumnType } from 'antd/es/table';
import type { ExpandableConfig } from 'antd/es/table/interface';
import { useState } from 'react';
import type { NestedKeyOf } from '~/types/nested-key-of';
import { parseDate } from '~/utils/utils';

const sorterFunctions = {
  string: (a: any, b: any) => a?.toString().localeCompare(b?.toString()),
  date: (a: any, b: any) => parseDate(a) - parseDate(b),
  number: (a: any, b: any) => (a ?? 0) - (b ?? 0),
  undefined: (a: any, b: any) => (a === b ? 1 : 0)
};

export interface TableProps<RecordType> {
  data: RecordType[];
  columns: ColumnsType<RecordType>;
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
  onRowClick?: (record: RecordType) => void;
  rowKey?: string;
  bordered?: boolean;
  scroll?: { x?: number | true | string; y?: number | string };
  size?: 'small' | 'middle' | 'large' | undefined;
  title?: string;
  footer?: string;
  showHeader?: boolean;
  sticky?: boolean;
  className?: string;
  expandable?: ExpandableConfig<RecordType>;
}

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

  const handleRowClick = (record: RecordType) => {
    if (onRowClick) {
      onRowClick(record);
    }
  };

  const isNotColumnGroupType = (
    column: ColumnType<RecordType> | ColumnGroupType<RecordType>
  ): column is ColumnType<RecordType> => {
    return !('children' in column);
  };

  // Enhance columns with sorting logic based on sorterType and sorterName
  const processColumns = (columns: ColumnsType<RecordType>): ColumnsType<RecordType> => {
    return columns.map(column => {
      const getNestedValue = (obj: RecordType, path: string): any => {
        return path.split('.').reduce((value, key) => (value ? value[key] : undefined), obj);
      };

      if (isNotColumnGroupType(column)) {
        // This is a non-group column
        if (column.sorterType) {
          column.sorter = (a, b) => {
            const valueA = column.sorterName
              ? getNestedValue(a, column.sorterName as string)
              : a[column.dataIndex as keyof RecordType];
            const valueB = column.sorterName
              ? getNestedValue(b, column.sorterName as string)
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

interface ColumnType<RecordType> extends AntColumnType<RecordType> {
  sorterType?: keyof typeof sorterFunctions;
  sorterName?: NestedKeyOf<RecordType>;
}

interface ColumnGroupType<RecordType> extends Omit<ColumnType<RecordType>, 'dataIndex'> {
  children: ColumnsType<RecordType>;
}

export type ColumnsType<RecordType> = (ColumnGroupType<RecordType> | ColumnType<RecordType>)[];

export default Table;
