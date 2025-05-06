import type { Option } from '@app-types/options';
import type { CodeEntity } from '~/types/code-entity';
import type { CodeEntityExtended } from '~/types/code-entity-extended';
import type { Country } from '~/types/country';

export const codeEntityToOptionMapper = (
  options: CodeEntity[] | CodeEntityExtended[],
  includeEmptyOption: boolean = false,
  emptyOptionLabel: string = ''
): Option[] => {
  const mappedOptions = options.map((option: CodeEntity | CodeEntityExtended) => ({
    value: option.id.toString(),
    label: option.name
  }));

  return includeEmptyOption
    ? [{ value: '', label: emptyOptionLabel }, ...mappedOptions]
    : mappedOptions;
};

export const countryToOptionMapper = (options: Country[]): Option[] => {
  return options.map((option: Country) => ({
    value: option.id.toString(),
    label: option.hebName
  }));
};
