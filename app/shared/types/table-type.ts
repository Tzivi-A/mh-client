import type { ColumnType as AntColumnType } from 'antd/es/table';
import type { ExpandableConfig } from 'antd/es/table/interface';
import type { NestedKeyOf } from './nested-key-of-type';
import type { sorterFunctions } from '@utils/table-utils';

export interface ColumnType<RecordType> extends AntColumnType<RecordType> {
  sorterType?: keyof typeof sorterFunctions;
  sorterName?: NestedKeyOf<RecordType>;
}

export interface ColumnGroupType<RecordType> extends Omit<ColumnType<RecordType>, 'dataIndex'> {
  children: ColumnsType<RecordType>;
}

export type ColumnsType<RecordType> = (ColumnGroupType<RecordType> | ColumnType<RecordType>)[];

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
    onPageChange?: (current: number, pageSize: number) => void;
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
