import type { Option } from '@app-types/options';
import type { CodeEntity } from '~/types/code-entity';
import type { CodeEntityExtended } from '~/types/code-entity-extended';
import type { Country } from '~/types/country';

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
