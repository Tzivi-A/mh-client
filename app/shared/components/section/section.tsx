import type { ReactNode } from 'react';
import { Flex } from '@ui/layout/flex/flex';

interface SectionProps {
  header: string;
  error?: string;
  children: ReactNode;
}

export const Section = ({ header, error, children }: SectionProps) => {
  return (
    <Flex direction="column">
      <Flex>
        <h3>{header}</h3>
        <div className="error">{error}</div>
      </Flex>
      {children}
    </Flex>
  );
};

export default Section;
