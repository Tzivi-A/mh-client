import { Image } from '@ui/image/image';
import { DividedRowList } from '@ui/divided-row-list/divided-row-list';
import { DividerTypeEnum } from '@app-types/enums/divider-type';
import styles from './registration-progress.module.css';
import PersonalIcon from '~/assets/images/registration/personal-details.svg';
import PartyIcon from '~/assets/images/registration/party-details.svg';
import BankIcon from '~/assets/images/registration/bank-details.svg';
import ApprovalIcon from '~/assets/images/registration/approval.svg';

export interface RegistrationStep {
  id: number;
  title: string;
  icon: string;
  dividerAfter?: DividerTypeEnum;
}

const steps: RegistrationStep[] = [
  {
    id: 1,
    title: 'פרטי המועמד והתמודדות',
    icon: PersonalIcon,
    dividerAfter: DividerTypeEnum.Arrow
  },
  {
    id: 2,
    title: 'פרטי הסיעה והבנק',
    icon: PartyIcon,
    dividerAfter: DividerTypeEnum.Arrow
  },
  {
    id: 3,
    title: 'פרטי איש קשר',
    icon: BankIcon,
    dividerAfter: DividerTypeEnum.Arrow
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
    if (currentStep === stepId) {
      return styles.active;
    }
    return '';
  };

  return (
    <div className={styles['progress-container']}>
      <DividedRowList
        items={steps}
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