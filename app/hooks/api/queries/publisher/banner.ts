import type { CodeEntity } from '~/types/code-entity-type';
import { codeEntityToOptionMapper, countryToOptionMapper } from '~/mappers/select-mapper';
import type { Country } from '~/types/country-type';
import type { Option } from '@app-types/option-type';
import { useAppQuery } from '@hooks/use-app-query';
import type { PublishBannerQueries } from '~/types/queries/publisher/publisher-banner-queries';

export const usePublisherBannerQueries = (): PublishBannerQueries => ({
  elections: useAppQuery<CodeEntity[], Option[]>({
    url: 'api/election/activeLocalElections',
    queryData: {
      queryStringData: {
        isAddRemark: false
      }
    },
    mapResponse: data => codeEntityToOptionMapper(data, true)
  }),
  countries: useAppQuery<Country[], Option[]>({
    url: 'api/codeTable/countries',
    mapResponse: data => countryToOptionMapper(data, true)
  }),
  cities: useAppQuery<CodeEntity[], Option[]>({
    url: 'api/codeTable/cities',
    mapResponse: data => codeEntityToOptionMapper(data, true)
  }),
  publicationSearch: useAppQuery<CodeEntity[], Option[]>({
    url: 'api/codeTable/publicationSearch',
    mapResponse: codeEntityToOptionMapper
  })
});

export const useCitiesByElectionId = (selectedElectionId?: string) =>
  useAppQuery<CodeEntity[], Option[]>({
    url: 'api/faction/cities',
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
    url: 'api/faction/factions',
    isRunNow: !!selectedCityId,
    queryData: {
      queryStringData: {
        cityId: selectedCityId ?? ''
      }
    },
    mapResponse: codeEntityToOptionMapper
  });
