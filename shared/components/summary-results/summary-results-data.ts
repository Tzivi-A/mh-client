import DonationIcon from '~/assets/images/DonationIcon.svg';
import type { SummaryResultData } from '~/types/publish-summary-result';

export const stats: SummaryResultData[] = [
  { title: 'רשומות', count: 45, sum: 65746.20, iconSrc: DonationIcon },
  { title: 'הלוואות', count: 9, sum: 53000.00, iconSrc: DonationIcon },
  { title: 'ערבויות', count: 1, sum: 10000.00, iconSrc: DonationIcon },
  { title: 'תרומות', count: 35, sum: 112416.20, iconSrc: DonationIcon },
];
