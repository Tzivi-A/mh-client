import { Image } from '@ui/image/image';
import { DividedRowList } from '@ui/divided-row-list/divided-row-list';
import { DividerTypeEnum } from '@app-types/enums/divider-type';
import styles from './registration-progress.module.css';
import { registrationStepsMapper } from '~/mappers/registration/registration-progress-mapper';

export interface RegistrationStep {
  id: number;
  title: string;
  icon: string;
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
    return '';
  };

  return (
    <div className={styles['progress-container']}>
      <DividedRowList
        items={registrationStepsMapper}
        renderItem={step => (
          <div className={`${styles.step} ${getStepClassName(step.id)}`}>
            <Image src={step.icon} alt={step.title} className={styles['step-icon']} />
            <span className={styles['step-number']}>{step.id}</span>
            <span className={styles['step-text']}>{step.title}</span>
          </div>
        )}
      />
    </div>
  );
};
