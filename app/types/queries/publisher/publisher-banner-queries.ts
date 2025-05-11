import type { Option } from '@app-types/option-type';
import type { UseQueryResult } from '@hooks/use-app-query';
import type { LocalPublicationResults } from '~/types/publisher/publisher-search-results-type';

export interface PublishBannerQueries {
  elections: UseQueryResult<Option[], Error>;
  citiesByElectionId?: UseQueryResult<Option[], Error>;
  factions?: UseQueryResult<Option[], Error>;
  countries: UseQueryResult<Option[], Error>;
  cities: UseQueryResult<Option[], Error>;
  publications: UseQueryResult<Option[], Error>;
  searchData?: UseQueryResult<LocalPublicationResults, Error>;
}
