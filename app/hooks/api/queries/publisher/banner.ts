import type { CodeEntity } from '~/types/code-entity';
import { mapperCodeEntityToOption, mapperCountryToOption } from '~/mappers/select-mapper';
import type { Country } from '~/types/country';
import type { Option } from '@app-types/options';
import { useAppQuery } from '../use-app-query';

export const usePublisherBannerQueries = () => ({
  elections: useAppQuery<CodeEntity[], Option[]>({
    url: 'api/election/activeLocalElections',
    queryData: {
      queryStringData: {
        isAddRemark: false
      }
    },
    mapResponse: data => mapperCodeEntityToOption(data, true)
  }),
  countries: useAppQuery<Country[], Option[]>({
    url: 'api/codeTable/countries',
    mapResponse: mapperCountryToOption
  }),
  cities: useAppQuery<CodeEntity[], Option[]>({
    url: 'api/codeTable/cities',
    mapResponse: mapperCodeEntityToOption
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
    mapResponse: mapperCodeEntityToOption
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
    mapResponse: mapperCodeEntityToOption
  });
