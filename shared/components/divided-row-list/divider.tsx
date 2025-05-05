import React from 'react';
import { DividerType } from '~/types/publish-summary-result';
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