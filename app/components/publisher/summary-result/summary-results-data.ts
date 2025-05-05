import DonationIcon from '~/assets/images/DonationIcon.svg';
import { DividerType, type SummaryResultData } from '~/types/publish-summary-result';

export const stats: SummaryResultData[] = [
  { title: 'רשומות', count: 45, sum: 657416.20, iconSrc: DonationIcon, dividerAfter: DividerType.Line },
  { title: 'הלוואות', count: 9, sum: 53000.00, iconSrc: DonationIcon, dividerAfter: DividerType.Line },
  { title: 'ערבויות', count: 1, sum: 10000.00, iconSrc: DonationIcon, dividerAfter: DividerType.Arrow },
  { title: 'תרומות', count: 35, sum: 112416.20, iconSrc: DonationIcon },
];
