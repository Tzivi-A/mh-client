import type { Option } from '@app-types/option-type';
import type { UseQueryResult } from '@hooks/use-app-query';
import type { PublisherResultSummaryData } from '~/types/publisher/publisher-summary-result-type';

export interface PublishBannerQueries {
  elections: UseQueryResult<Option[], Error>;
  citiesByElectionId?: UseQueryResult<Option[], Error>;
  factions?: UseQueryResult<Option[], Error>;
  countries: UseQueryResult<Option[], Error>;
  cities: UseQueryResult<Option[], Error>;
  publicationSearch?: UseQueryResult<Option[], Error>;
  summaryData: UseQueryResult<PublisherResultSummaryData[], Error>;
}
