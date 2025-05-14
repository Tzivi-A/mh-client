import { DividerTypeEnum } from '@app-types/enums/divider-type';
import type { RegistrationStep } from '~/components/registration/registration-progress/registration-progress';
import PersonalIcon from '~/assets/images/registration/personal-details.svg';
import PartyIcon from '~/assets/images/registration/party-details.svg';
import BankIcon from '~/assets/images/registration/bank-details.svg';
import ApprovalIcon from '~/assets/images/registration/approval.svg';

export const registrationStepsMapper: RegistrationStep[] = [
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
