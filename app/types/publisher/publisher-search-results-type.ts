import type { DateType } from '~/shared/types/date-type';
import type { CodeEntity } from '~/types/code-entity-type';

export interface LocalGuarantyDonationSearchRow {
  fundingType: CodeEntity;
  publicationSearchName: string;
  city: string;
  country: string;
  publicationSearchSum: string;
  sumInCurrency: string;
  publicationSearchDate?: string;
  electionDate?: DateType;
  electionCity: string;
  electionFaction: string;
  loanReturnSum: string;
}

export interface LocalGuarantyDonationSearch {
  results: LocalGuarantyDonationSearchRow[];
  numDonations: number;
  numGuarantees: number;
  numLoans: number;
  sumDonations: string;
  sumGuarantees: string;
  sumLoans: string;
  isNumRecordsGreaterThanMaxParameter: number;
}
