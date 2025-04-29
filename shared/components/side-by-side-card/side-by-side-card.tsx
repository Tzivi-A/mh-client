import { Flex } from '@ui/layout/flex/flex';
import React, { type ReactNode } from 'react';
import './side-by-side-card.css';

interface SideProps {
  children: ReactNode;
}

const Right = ({ children }: SideProps) => <>{children}</>;
const Left = ({ children }: SideProps) => <>{children}</>;

interface SideBySideCardProps {
  children: ReactNode;
}

export const SideBySideCard = ({ children }: SideBySideCardProps) => {
  const elements = React.Children.toArray(children);

  const left = elements.find(child => React.isValidElement(child) && child.type === Left);
  const right = elements.find(child => React.isValidElement(child) && child.type === Right);

  return (
    <div className="side-by-side-card">
      <Flex direction="row">
        <div className="side-by-side-card_right">{right}</div>
        <div className="side-by-side-card_left">{left}</div>
      </Flex>
    </div>
  );
};

SideBySideCard.Left = Left;
SideBySideCard.Right = Right;

export default SideBySideCard;
