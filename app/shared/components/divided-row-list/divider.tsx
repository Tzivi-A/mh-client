import { DividerTypeEnum } from '@app-types/enums/divider-type';
import React from 'react';
import arrowSrc from '@images/arrow.svg';

const DividerComponents: Record<DividerTypeEnum, React.FC> = {
  [DividerTypeEnum.Line]: () => <div className="divided-row-list-line" />,
  [DividerTypeEnum.Arrow]: () => (
    <div className="divided-row-list-arrow">
      <img src={arrowSrc} alt="" />
    </div>
  )
};

export const Divider = ({ type }: { type?: DividerTypeEnum }) => {
  if (!type || !(type in DividerComponents)) return null;
  const Comp = DividerComponents[type];
  return <Comp />;
};
