import { Card } from '@ui/card/card';
import { Flex } from '@ui/layout/flex/flex';
import React, { type ReactNode } from 'react';

interface SideProps {
  children: ReactNode;
}

const Left = ({ children }: SideProps) => <>{children}</>;
const Right = ({ children }: SideProps) => <>{children}</>;

interface SideBySideCardProps {
  children: ReactNode;
}

export const SideBySideCard = ({ children }: SideBySideCardProps) => {
  const elements = React.Children.toArray(children);

  const left = elements.find(child => React.isValidElement(child) && child.type === Left);
  const right = elements.find(child => React.isValidElement(child) && child.type === Right);

  return (
    <Card>
      <Flex direction="row">
        <div style={{ flex: 1, background: '#cce4ff', padding: 20 }}>{left}</div>
        <div style={{ flex: 1, background: '#ffffff', padding: 20 }}>{right}</div>
      </Flex>
    </Card>
  );
};

SideBySideCard.Left = Left;
SideBySideCard.Right = Right;
