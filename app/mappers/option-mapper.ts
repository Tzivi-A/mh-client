import type { Option } from '@app-types/option-type';
import type { CodeEntity } from '~/types/code-entity-type';
import type { CodeEntityExtended } from '~/types/code-entity-extended-type';
import type { Country } from '~/types/country-type';
import { PublicationSearchEnum } from '~/types/enums/publication-search';

const mapWithEmptyOption = (
  mappedOptions: Option[],
  includeEmptyOption: boolean,
  emptyOptionLabel: string
): Option[] =>
  includeEmptyOption ? [{ value: '', label: emptyOptionLabel }, ...mappedOptions] : mappedOptions;

export const codeEntityToOptionMapper = (
  options: (CodeEntity | CodeEntityExtended)[],
  includeEmptyOption = false,
  emptyOptionLabel = ''
): Option[] => {
  const mapped = options.map(({ id, name }) => ({
    value: id,
    label: name
  }));
  return mapWithEmptyOption(mapped, includeEmptyOption, emptyOptionLabel);
};

export const countryToOptionMapper = (
  options: Country[],
  includeEmptyOption = false,
  emptyOptionLabel = ''
): Option[] => {
  const mapped = options.map(({ id, hebName }) => ({
    value: id,
    label: hebName
  }));
  return mapWithEmptyOption(mapped, includeEmptyOption, emptyOptionLabel);
};

export const publicationsSearchTypeToOptionMapper = (options: CodeEntity[]): Option[] => {
  return options
    .filter(({ id }) => id !== (PublicationSearchEnum.All as number))
    .map(({ id, name }) => ({
      value: id,
      label: name
    }));
};
