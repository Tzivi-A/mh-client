import React from 'react';
import { Card, Table } from 'antd';
import type { TableProps } from 'antd';

import type { PublishResult } from '~/types/publish-result';
import { FundingTypeEnum } from '~/types/enums/funding-type';
import type { ColumnsType } from '@app-types/table';
import DonationIcon from '~/assets/images/DonationIcon.svg';
interface PublishResultTableProps {
    publishResult: { data?: PublishResult[] };
    loading?: boolean;
}

// Utility to map funding type IDs to icon sources
const getFundingTypeIconSrc = (fundingTypeId: number): string => {
    const iconMap: Record<number, string> = {
        [FundingTypeEnum.Donation]: DonationIcon,
        [FundingTypeEnum.Loan]: DonationIcon,
        [FundingTypeEnum.Guarantee]: DonationIcon,
    };
    return iconMap[fundingTypeId] || '/assets/icons/default.png';
};

export const PublishResultTable: React.FC<PublishResultTableProps> = ({ publishResult, loading = false }) => {
    const columns: ColumnsType<PublishResult> = [
        {
            title: 'סוג מימון',
            dataIndex: 'FundingType',
            key: 'fundingType',
            sorterType: 'string',
            render: fundingType => {
                const src = getFundingTypeIconSrc(fundingType.ID);
                return (
                    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <img
                            src={src}
                            alt={fundingType.Name}
                            style={{ width: 20, height: 20, marginInlineEnd: 8 }}
                        />
                        {fundingType.Name}
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
                { title: 'סיעה', dataIndex: 'Faction', key: 'faction', align: 'right', sorterType: 'string' },
                { title: 'ישוב', dataIndex: 'ElectionCity', key: 'electionCity', align: 'right', sorterType: 'string' },
                { title: 'תאריך בחירות', dataIndex: 'ElectionDate', key: 'electionDate', align: 'right', sorterType: 'date' }
            ]
        },
        {
            title: 'מאפייני התורם/ המלווה/ הערב',
            key: 'entityCharacteristics',
            align: 'center',
            children: [
                { title: 'שם מלא', dataIndex: 'FullName', key: 'fullName', align: 'right', sorterType: 'string' },
                { title: 'ארץ', dataIndex: 'Country', key: 'country', align: 'right', sorterType: 'string' },
                { title: 'ישוב', dataIndex: 'EntityCity', key: 'entityCity', align: 'right', sorterType: 'string' }
            ]
        },
        {
            title: 'מאפייני התרומה/ ההלוואה/ הערבות',
            key: 'fundingCharacteristics',
            align: 'center',
            children: [
                { title: 'תאריך', dataIndex: 'FundingDate', key: 'fundingDate', align: 'right', sorterType: 'date' },
                {
                    title: 'סכום', dataIndex: 'FundingAmount', key: 'fundingAmount', align: 'right', sorterType: 'number',
                    render: amount =>
                        amount.toLocaleString('he-IL', { style: 'decimal', minimumFractionDigits: 2 })
                },
                {
                    title: 'יתרת הלוואה', dataIndex: 'LoanBalance', key: 'loanBalance', align: 'right', sorterType: 'number',
                    render: balance =>
                        balance?.toLocaleString('he-IL', { style: 'decimal', minimumFractionDigits: 2 })
                }
            ]
        }
    ];

    const tableProps: TableProps<PublishResult> = {
        dataSource: (publishResult.data ?? []).map(d => ({ ...d, key: d.ID })),
        columns,
        loading,
        pagination: {
            current: 1,
            pageSize: 10,
            total: publishResult.data?.length,
            showSizeChanger: true,
            pageSizeOptions: ['10', '25', '50', '100']
        },
        scroll: { x: 'max-content', y: 510 },
        rowKey: 'key',
        bordered: true,
        showHeader: true
    };

    return (
        <Card>
            <Table<PublishResult> {...tableProps} />
        </Card>
    );
};
