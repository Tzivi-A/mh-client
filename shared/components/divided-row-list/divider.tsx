import { DividerType } from '@app-types/enums/divider-type';
import React from 'react';
import arrowSrc from '~/assets/images/arrow.svg';

const DividerComponents: Record<DividerType, React.FC> = {
    [DividerType.Line]: () => <div className="divided-row-list-line" />,
    [DividerType.Arrow]: () => (
        <div className="divided-row-list-arrow">
            <img src={arrowSrc} alt="" />
        </div>
    ),
};

export const Divider = ({ type }: { type?: DividerType }) => {
    if (!type || !(type in DividerComponents)) return null;
    const Comp = DividerComponents[type];
    return <Comp />;
};