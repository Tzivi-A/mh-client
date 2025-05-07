import type { DatePickerType } from '@app-types/date-type';
import type { PublicationSearchEnum } from '~/types/enums/publication-search';

export interface PublisherSearch {
  publicationSearchType: PublicationSearchEnum;
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
