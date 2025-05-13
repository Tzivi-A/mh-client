import type { DateType } from '@app-types/date-type';
import type { CodeEntity } from '~/types/code-entity-type';

export interface LocalPublicationResultRow {
  publicationType: CodeEntity;
  name: string;
  city: string;
  country: string;
  publicationSum: string;
  sumInCurrency: string;
  publicationDate?: DateType;
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
