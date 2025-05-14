import { DividerTypeEnum } from '@app-types/enums/divider-type';
import type { RegistrationStep } from '~/components/registration/registration-progress/registration-progress';
import PersonalIcon from '~/assets/images/registration/personal-details.svg';
import PersonalIconGray from '~/assets/images/registration/personal-details-gray.svg';
import PartyIcon from '~/assets/images/registration/party-details.svg';
import PartyIconGray from '~/assets/images/registration/party-details-gray.svg';
import BankIcon from '~/assets/images/registration/bank-details.svg';
import BankIconGray from '~/assets/images/registration/bank-details-gray.svg';
import ApprovalIcon from '~/assets/images/registration/approval.svg';
import ApprovalIconGray from '~/assets/images/registration/approval-gray.svg';

export const registrationStepsMapper: RegistrationStep[] = [
  {
    id: 1,
    title: 'שלב 1',
    subtitle: 'פרטי המועמד והתמודדות',
    icon: PersonalIcon,
    inactiveIcon: PersonalIconGray,
    dividerAfter: DividerTypeEnum.Arrow
  },
  {
    id: 2,
    title: 'שלב 2',
    subtitle: 'פרטי הסיעה והבנק',
    icon: PartyIcon,
    inactiveIcon: PartyIconGray,
    dividerAfter: DividerTypeEnum.Arrow
  },
  {
    id: 3,
    title: 'שלב 3',
    subtitle: 'פרטי איש קשר',
    icon: BankIcon,
    inactiveIcon: BankIconGray,
    dividerAfter: DividerTypeEnum.Arrow
  },
  {
    id: 4,
    title: 'שלב 4',
    subtitle: 'אישור פרטים',
    icon: ApprovalIcon,
    inactiveIcon: ApprovalIconGray
  }
];
