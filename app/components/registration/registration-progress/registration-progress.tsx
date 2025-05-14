import { Image } from '@ui/image/image';
import { DividedRowList } from '@ui/divided-row-list/divided-row-list';
import { DividerTypeEnum } from '@app-types/enums/divider-type';
import styles from './registration-progress.module.css';
import { registrationStepsMapper } from '~/mappers/registration/registration-progress-mapper';

export interface RegistrationStep {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  inactiveIcon: string;
  dividerAfter?: DividerTypeEnum;
}

interface RegistrationProgressProps {
  currentStep: number;
}

export const RegistrationProgress = ({ currentStep }: RegistrationProgressProps) => {
  const getStepClassName = (stepId: number) => {
    if (currentStep === stepId) {
      return styles.active;
    }
    if (currentStep > stepId) {
      return styles.completed;
    }
    return '';
  };

  const getStepIcon = (step: RegistrationStep) => {
    return currentStep >= step.id ? step.icon : step.inactiveIcon;
  };

  return (
    <div className={styles['progress-container']}>
      <DividedRowList
        items={registrationStepsMapper}
        renderItem={step => (
          <div className={`${styles.step} ${getStepClassName(step.id)}`}>
            <Image src={getStepIcon(step)} alt={step.subtitle} className={styles['step-icon']} />
            <span className={styles['step-number']}>{step.id}</span>
            <div className={styles['step-text-container']}>
              <span className={styles['step-title']}>{step.title}</span>
              <span className={styles['step-subtitle']}>{step.subtitle}</span>
            </div>
          </div>
        )}
      />
    </div>
  );
};
