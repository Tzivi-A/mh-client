import { DividedRowList } from '@ui/divided-row-list/divided-row-list';
import { DividerTypeEnum } from '@app-types/enums/divider-type';
import { StepItem } from '@ui/step-item/step-item';
import { registrationStepsMapper } from '~/mappers/registration/registration-progress-mapper';
import styles from './registration-progress.module.css';

interface RegistrationProgressProps {
  currentStep: number;
}

export const RegistrationProgress = ({ currentStep }: RegistrationProgressProps) => {
  const getStepIcon = (step: typeof registrationStepsMapper[0]) =>
    currentStep >= step.id ? step.icon : step.inactiveIcon;

  return (
    <div className={styles['progress-container']}>
      <DividedRowList
        items={registrationStepsMapper}
        renderItem={step => (
          <StepItem
            icon={getStepIcon(step)}
            title={step.title}
            subtitle={step.subtitle}
            isActive={currentStep === step.id}
          />
        )}
      />
    </div>
  );
};