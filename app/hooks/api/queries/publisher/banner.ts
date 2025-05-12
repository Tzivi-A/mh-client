import type { CodeEntity } from '~/types/code-entity-type';
import {
  codeEntityToOptionMapper,
  countryToOptionMapper,
  publicationsSearchTypeToOptionMapper
} from '~/mappers/option-mapper';
import type { Country } from '~/types/country-type';
import type { Option } from '@app-types/option-type';
import { useAppQuery } from '@hooks/use-app-query';
import type { PublishBannerQueries } from '~/types/queries/publisher/publisher-banner-queries';
import type { PublisherSearch } from '~/types/publisher/publisher-search-type';
import type { DataObject } from '@app-types/api-type';
import type { LocalPublicationResults } from '~/types/publisher/publisher-search-results-type';
import {
  GET_ACTIVE_LOCAL_ELECTIONS,
  GET_CITIES,
  GET_COUNTRIES,
  GET_FACTION_CITIES,
  GET_FACTIONS,
  LOCAL_PUBLICATION_SEARCH,
  GET_CODE_ENTITY_LIST
} from '~/api/api-urls';
import { CodeEntityEnum } from '~/types/enums/code-entity';

export const usePublisherBannerQueries = (): PublishBannerQueries => ({
  elections: useAppQuery<CodeEntity[], Option[]>({
    url: GET_ACTIVE_LOCAL_ELECTIONS,
    queryData: {
      queryStringData: {
        isAddRemark: false
      }
    },
    mapResponse: data => codeEntityToOptionMapper(data, true)
  }),
  countries: useAppQuery<Country[], Option[]>({
    url: GET_COUNTRIES,
    mapResponse: data => countryToOptionMapper(data, true)
  }),
  cities: useAppQuery<CodeEntity[], Option[]>({
    url: GET_CITIES,
    mapResponse: data => codeEntityToOptionMapper(data, true)
  }),
  publications: useAppQuery<CodeEntity[], Option[]>({
    url: GET_CODE_ENTITY_LIST,
    queryData: {
      queryStringData: {
        codeTable: CodeEntityEnum.PublicationSearchType
      }
    },
    mapResponse: publicationsSearchTypeToOptionMapper
  })
});

export const useCitiesByElectionId = (selectedElectionId?: string) =>
  useAppQuery<CodeEntity[], Option[]>({
    url: GET_FACTION_CITIES,
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
    url: GET_FACTIONS,
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
