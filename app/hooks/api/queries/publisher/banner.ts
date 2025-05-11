import type { CodeEntity } from '~/types/code-entity-type';
import { codeEntityToOptionMapper, countryToOptionMapper } from '~/mappers/select-mapper';
import type { Country } from '~/types/country-type';
import type { Option } from '@app-types/option-type';
import { useAppQuery } from '@hooks/use-app-query';
import type { PublishBannerQueries } from '~/types/queries/publisher/publisher-banner-queries';
import type { PublisherSearch } from '~/types/publisher/publisher-search-type';
import type { DataObject } from '@app-types/api-type';
import type { LocalPublicationResults } from '~/types/publisher/publisher-search-results-type';
import {
  ACTIVE_LOCAL_ELECTIONS,
  CITIES,
  COUNTRIES,
  FACTION_CITIES,
  FACTIONS,
  LOCAL_PUBLICATION_SEARCH,
  PUBLICATION
} from '~/api/api-urls';

export const usePublisherBannerQueries = (): PublishBannerQueries => ({
  elections: useAppQuery<CodeEntity[], Option[]>({
    url: ACTIVE_LOCAL_ELECTIONS,
    queryData: {
      queryStringData: {
        isAddRemark: false
      }
    },
    mapResponse: data => codeEntityToOptionMapper(data, true)
  }),
  countries: useAppQuery<Country[], Option[]>({
    url: COUNTRIES,
    mapResponse: data => countryToOptionMapper(data, true)
  }),
  cities: useAppQuery<CodeEntity[], Option[]>({
    url: CITIES,
    mapResponse: data => codeEntityToOptionMapper(data, true)
  }),
  publications: useAppQuery<CodeEntity[], Option[]>({
    url: PUBLICATION,
    mapResponse: codeEntityToOptionMapper
  })
});

export const useCitiesByElectionId = (selectedElectionId?: string) =>
  useAppQuery<CodeEntity[], Option[]>({
    url: FACTION_CITIES,
    isRunNow: !!selectedElectionId,
    queryData: {
      queryStringData: {
        electionId: selectedElectionId ?? ''
      }
    },
    mapResponse: codeEntityToOptionMapper
  });

export const useFactions = (selectedCityId?: number) =>
  useAppQuery<CodeEntity[], Option[]>({
    url: FACTIONS,
    isRunNow: !!selectedCityId,
    queryData: {
      queryStringData: {
        cityId: selectedCityId ?? ''
      }
    },
    mapResponse: codeEntityToOptionMapper
  });

export const useSearchData = (data: PublisherSearch) =>
  useAppQuery<LocalPublicationResults>({
    url: LOCAL_PUBLICATION_SEARCH,
    method: 'POST',
    isRunNow: false,
    queryData: { requestData: data as unknown as DataObject }
  });
