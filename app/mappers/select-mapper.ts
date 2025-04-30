import type { Option } from '@app-types/options';
import type { CodeEntity } from '~/types/code-entity';
import type { CodeEntityExtended } from '~/types/code-entity-extended';

export const mapperCodeEntityToOption = (
  options: CodeEntity[] | CodeEntityExtended[]
): Option[] => {
  return options.map((option: CodeEntity | CodeEntityExtended) => ({
    value: option.id.toString(),
    label: option.name
  }));
};
