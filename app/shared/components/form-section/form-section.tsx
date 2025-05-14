import type { ReactNode } from 'react';
import styles from './form-section.module.css';

interface FormSectionProps {
  title: string;
  children: ReactNode;
}

export const FormSection = ({ title, children }: FormSectionProps) => {
  return (
    <div className={styles['form-section']}>
      <div className={styles['form-section-header']}>{title}</div>
      <div className={styles['form-section-content']}>{children}</div>
    </div>
  );
};

export default FormSection;
