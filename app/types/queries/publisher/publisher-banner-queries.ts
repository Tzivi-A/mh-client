import type { UseQueryResult } from '@tanstack/react-query';
import type { Option } from '@app-types/option-type';

export interface PublishBannerQueries {
  elections: UseQueryResult<Option[], Error>;
  citiesByElectionId?: UseQueryResult<Option[], Error>;
  factions?: UseQueryResult<Option[], Error>;
  countries: UseQueryResult<Option[], Error>;
  cities: UseQueryResult<Option[], Error>;
}
