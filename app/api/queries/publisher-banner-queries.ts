import type { CodeEntity } from '~/types/code-entity';
import { useAppQuery } from '../../hooks/use-app-query';
import { mapperCodeEntityToOption, mapperCountryToOption } from '~/mappers/select-mapper';
import type { Country } from '~/types/country';
import type { Option } from '@app-types/options';

export const PublisherBannerQueries = () => ({
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

export const CitiesByElectionId = (selectedElectionId?: string) =>
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

export const Factions = (selectedCityId?: number) =>
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
