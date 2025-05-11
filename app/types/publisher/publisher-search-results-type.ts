import type { DateType } from '@app-types/date-type';
import type { CodeEntity } from '~/types/code-entity-type';

export interface LocalPublicationResultRow {
  publicationType: CodeEntity;
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

export interface LocalPublicationResults {
  results: LocalPublicationResultRow[];
  numDonations: number;
  numGuarantees: number;
  numLoans: number;
  sumDonations: string;
  sumGuarantees: string;
  sumLoans: string;
  isNumRecordsGreaterThanMaxParameter: number;
}
