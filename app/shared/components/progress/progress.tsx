import { DividedRowList } from '@ui/divided-row-list/divided-row-list';
import type { DividerTypeEnum } from '@app-types/enums/divider-type';
import { StepItem } from '@ui/step-item/step-item';
import styles from './progress.module.css';

export interface ProgressStep {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  inactiveIcon: string;
  dividerAfter?: DividerTypeEnum;
}

interface ProgressProps {
  steps: ProgressStep[];
  currentStep: number;
}

export const Progress = ({ steps, currentStep }: ProgressProps) => {
  const getStepIcon = (step: ProgressStep) =>
    currentStep >= step.id ? step.icon : step.inactiveIcon;

  return (
    <div className={styles['progress-container']}>
      <DividedRowList
        items={steps}
        renderItem={step => (
          <>
                <p>{currentStep }{step.id}</p>
          <StepItem
            icon={getStepIcon(step)}
            title={step.title}
            subtitle={step.subtitle}
            isActive={currentStep === step.id}
          /></>
        )}
      />
    </div>
  );
};

export default Progress;
