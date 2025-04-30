import type { DatePickerType } from '@app-types/date-types';
import type { FundingTypeEnum } from './enums/funding-type';

export interface PublisherSearch {
  electionDate?: string;
  publicationSearchType: FundingTypeEnum;
  entityID?: number;
  fullName: string;
  cityID?: number;
  countryID?: number;
  fromDate?: DatePickerType;
  toDate?: DatePickerType;
  fromSum?: number;
  toSum?: number;
}
