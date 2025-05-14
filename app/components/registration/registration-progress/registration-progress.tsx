import { Image } from '@ui/image/image';
import styles from './registration-progress.module.css';
import PersonalIcon from '~/assets/images/registration/personal-details.svg';
import PartyIcon from '~/assets/images/registration/party-details.svg';
import BankIcon from '~/assets/images/registration/bank-details.svg';
import ApprovalIcon from '~/assets/images/registration/approval.svg';

export interface RegistrationStep {
  id: number;
  title: string;
  icon: string;
}

const steps: RegistrationStep[] = [
  {
    id: 1,
    title: 'פרטי המועמד והתמודדות',
    icon: PersonalIcon
  },
  {
    id: 2,
    title: 'פרטי הסיעה והבנק',
    icon: PartyIcon
  },
  {
    id: 3,
    title: 'פרטי איש קשר',
    icon: BankIcon
  },
  {
    id: 4,
    title: 'אישור פרטים',
    icon: ApprovalIcon
  }
];

interface RegistrationProgressProps {
  currentStep: number;
}

export const RegistrationProgress = ({ currentStep }: RegistrationProgressProps) => {
  const getStepClassName = (stepId: number) => {
    if (currentStep === stepId) return styles.active;
    if (currentStep > stepId) return styles.completed;
    return '';
  };

  const getDividerClassName = (stepId: number) => {
    if (currentStep > stepId) return styles.completed;
    if (currentStep === stepId) return styles.active;
    return '';
  };

  return (
    <div className={styles['progress-container']}>
      {steps.map((step, index) => (
        <>
          <div
            key={step.id}
            className={`${styles.step} ${getStepClassName(step.id)}`}
          >
            <Image src={step.icon} alt={step.title} className={styles['step-icon']} />
            <span className={styles['step-number']}>{step.id}</span>
            <span className={styles['step-text']}>{step.title}</span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`${styles.divider} ${getDividerClassName(step.id)}`}
            />
          )}
        </>
      ))}
    </div>
  );
};