import type { DatePickerType } from '@app-types/date-types';

export interface PublisherSearch {
  electionDate?: string;
  electionCityID?: number;
  entityID?: number;
  fullName: string;
  cityID?: number;
  countryID?: number;
  fromDate?: DatePickerType;
  toDate?: DatePickerType;
  fromSum?: number;
  toSum?: number;
}
