import React, { type ReactNode } from 'react';
import { Card } from '../card/card';
import { Flex } from '../flex/flex';

interface SideProps {
  children: ReactNode;
}

const Left: React.FC<SideProps> = ({ children }) => <>{children}</>;
const Right: React.FC<SideProps> = ({ children }) => <>{children}</>;

interface SideBySideCardProps {
  children: ReactNode;
}

const SideBySideCard: React.FC<SideBySideCardProps> & {
  Left: typeof Left;
  Right: typeof Right;
} = ({ children }) => {
  const left = React.Children.toArray(children).find(
    (child: ReactNode) => React.isValidElement(child) && child.type === Left
  );
  const right = React.Children.toArray(children).find(
    (child: ReactNode) => React.isValidElement(child) && child.type === Right
  );

  return (
    <Card>
      <Flex direction="row">
        <div>{left}</div>
        <div>{right}</div>
      </Flex>
    </Card>
  );
};

SideBySideCard.Left = Left;
SideBySideCard.Right = Right;

export default SideBySideCard;
