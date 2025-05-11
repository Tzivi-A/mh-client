import DonationIcon from '~/assets/images/publisher/donation.svg';
import DonationZero from '~/assets/images/publisher/donation-zero.svg';
import DonationTableIcon from '~/assets/images/publisher/donation-tbl.svg';
import GuaranteeIcon from '~/assets/images/publisher/guarantee.svg';
import GuaranteeZero from '~/assets/images/publisher/guarantee-zero.svg';
import GuaranteeTableIcon from '~/assets/images/publisher/guarantee-tbl.svg';
import LoanIcon from '~/assets/images/publisher/loan.svg';
import LoanZero from '~/assets/images/publisher/loan-zero.svg';
import LoanTableIcon from '~/assets/images/publisher/loan-tbl.svg';
import SummaryIcon from '~/assets/images/publisher/summary.svg';
import { PublicationSearchEnum } from '~/types/enums/publication-search';

export const PublicationSearchIcons1: Record<PublicationSearchEnum, string> = {
  [PublicationSearchEnum.Donation]: DonationIcon,
  [PublicationSearchEnum.Guarantee]: GuaranteeIcon,
  [PublicationSearchEnum.Loan]: LoanIcon,
  [PublicationSearchEnum.All]: SummaryIcon
};

export const PublicationSearchIcons: Record<
  PublicationSearchEnum,
  { normal: string; zero: string; table?: string }
> = {
  [PublicationSearchEnum.Donation]: {
    normal: DonationIcon,
    zero: DonationZero,
    table: DonationTableIcon
  },
  [PublicationSearchEnum.Guarantee]: {
    normal: GuaranteeIcon,
    zero: GuaranteeZero,
    table: GuaranteeTableIcon
  },
  [PublicationSearchEnum.Loan]: {
    normal: LoanIcon,
    zero: LoanZero,
    table: LoanTableIcon
  },
  [PublicationSearchEnum.All]: {
    normal: SummaryIcon,
    zero: SummaryIcon
  }
};

export const PublicationSearchTitles: Record<
  PublicationSearchEnum,
  { singular: string; plural: string }
> = {
  [PublicationSearchEnum.Donation]: { singular: 'תרומה', plural: 'תרומות' },
  [PublicationSearchEnum.Guarantee]: { singular: 'ערבות', plural: 'ערבויות' },
  [PublicationSearchEnum.Loan]: { singular: 'הלוואה', plural: 'הלוואות' },
  [PublicationSearchEnum.All]: { singular: 'רשומה', plural: 'רשומות' }
};
