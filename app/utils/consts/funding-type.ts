import LoanIcon from '~/assets/images/LoanIcon.svg';
import GuaranteeIcon from '~/assets/images/GuaranteeIcon.svg';
import { FundingTypeEnum } from '~/types/enums/funding-type';
import DonationIcon from '~/assets/images/DonationIcon.svg';

export const FundingTypeIcons: Record<FundingTypeEnum, string> = {
  [FundingTypeEnum.Donation]: DonationIcon,
  [FundingTypeEnum.Guarantee]: GuaranteeIcon,
  [FundingTypeEnum.Loan]: LoanIcon
};

export const FundingTypeTitles: Record<FundingTypeEnum, { singular: string; plural: string }> = {
  [FundingTypeEnum.Donation]: { singular: 'תרומה', plural: 'תרומות' },
  [FundingTypeEnum.Guarantee]: { singular: 'ערבות', plural: 'ערבויות' },
  [FundingTypeEnum.Loan]: { singular: 'הלוואה', plural: 'הלוואות' }
};
