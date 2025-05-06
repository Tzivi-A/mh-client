import LoanIcon from '~/assets/images/publisher/loan.svg';
import GuaranteeIcon from '~/assets/images/publisher/guarantee.svg';
import { FundingTypeEnum } from '~/types/enums/funding-type';
import DonationIcon from '~/assets/images/publisher/donation.svg';

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
