import type { ReactNode } from 'react';

interface SectionProps {
  header: string;
  children: ReactNode;
}

export const Section = ({ header, children }: SectionProps) => {
  return (
    <div>
      <h3>{header}</h3>
      {children}
    </div>
  );
};

export default Section;
