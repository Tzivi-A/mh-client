import type { Option } from '@app-types/option-type';
import type { UseQueryResult } from '@hooks/use-app-query';

export interface PublishBannerQueries {
  elections: UseQueryResult<Option[], Error>;
  citiesByElectionId?: UseQueryResult<Option[], Error>;
  factions?: UseQueryResult<Option[], Error>;
  countries: UseQueryResult<Option[], Error>;
  cities: UseQueryResult<Option[], Error>;
  publicationSearch: UseQueryResult<Option[], Error>;
}
