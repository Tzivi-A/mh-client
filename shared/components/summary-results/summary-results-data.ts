import type { SummaryResultData } from '@app-types/';
import {ReactComponent  as logo } from '~/assets/images/icon1.svg';

export const stats: SummaryResultData[] = [
  { title: 'רשומות',   count: 45, sum: 657416.20, icon: <logo />  },
  { title: 'הלוואות',   count: 9,  sum: 535000.00, icon: <<RecordsIcon /> /> },
  { title: 'ערבויות',   count: 1,  sum: 10000.00,  icon: <<RecordsIcon /> /> },
  { title: 'תרומות',   count: 35, sum: 112416.20, icon: <<RecordsIcon /> /> },
];
