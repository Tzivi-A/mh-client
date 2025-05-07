import type { Option } from '@app-types/option-type';
import type { CodeEntity } from '~/types/code-entity-type';
import type { CodeEntityExtended } from '~/types/code-entity-extended-type';
import type { Country } from '~/types/country-type';

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
    value: id.toString(),
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
    value: id.toString(),
    label: hebName
  }));
  return mapWithEmptyOption(mapped, includeEmptyOption, emptyOptionLabel);
};
