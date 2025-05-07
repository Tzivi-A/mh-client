import LoanIcon from '~/assets/images/publisher/loan.svg';
import GuaranteeIcon from '~/assets/images/publisher/guarantee.svg';
import DonationIcon from '~/assets/images/publisher/donation.svg';
import SummaryIcon from '~/assets/images/publisher/summary.svg';
import { PublicationSearchEnum } from '~/types/enums/publication-search';

export const PublicationSearchIcons: Record<PublicationSearchEnum, string> = {
  [PublicationSearchEnum.Donation]: DonationIcon,
  [PublicationSearchEnum.Guarantee]: GuaranteeIcon,
  [PublicationSearchEnum.Loan]: LoanIcon,
  [PublicationSearchEnum.All]: SummaryIcon
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
