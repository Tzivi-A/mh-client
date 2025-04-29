import type { DatePickerType } from '@app-types/date-types';
import type { FundingTypeEnum } from './enums/funding-type';

export interface PublisherSearch {
  ElectionDate?: string;
  PublicationSearchType: FundingTypeEnum;
  EntityID?: number;
  FullName: string;
  CityID?: number;
  CountryID?: number;
  FromDate?: DatePickerType;
  ToDate?: DatePickerType;
  FromSum?: number;
  ToSum?: number;
}
