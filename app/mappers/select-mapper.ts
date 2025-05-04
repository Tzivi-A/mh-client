import type { Option } from '@app-types/options';
import type { CodeEntity } from '~/types/code-entity';
import type { CodeEntityExtended } from '~/types/code-entity-extended';
import type { Country } from '~/types/country';

export const mapperCodeEntityToOption = (
  options: CodeEntity[] | CodeEntityExtended[]
): Option[] => {
  return options.map((option: CodeEntity | CodeEntityExtended) => ({
    value: option.id.toString(),
    label: option.name
  }));
};

export const mapperCountryToOption = (options: Country[]): Option[] => {
  return options.map((option: Country) => ({
    value: option.id.toString(),
    label: option.hebName
  }));
};
