import { useMemo, useState } from 'react';
import { CheckBoxGroup } from '@ui/form/check-box/check-box-group/check-box-group';
import type { Option } from '@app-types/option-type';
import type { LocalPublicationResultRow } from '~/types/publisher/publisher-search-results-type';

interface Props {
  tableData: LocalPublicationResultRow[];
  onFilterChange: (filteredData: LocalPublicationResultRow[]) => void;
}

// Generate publication-type-filter options once
const PublicationFilter = ({ tableData, onFilterChange }: Props) => {
  const publicationTypeOptions: Option[] = useMemo(() => {
    const seen = new Set<number>();
    return tableData.reduce<Option[]>((acc, row) => {
      const { id, name } = row.publicationType ?? {};
      if (id && !seen.has(id)) {
        seen.add(id);
        acc.push({ value: id, label: name });
      }
      return acc;
    }, []);
  }, [tableData]);

  // Init all types selected by default
  const [selected, setSelected] = useState(() => publicationTypeOptions.map(opt => opt.value));

  // Filter data based on selected types
  const filteredData = useMemo(() => {
    if (selected.length === 0) {
      return [];
    }
    return tableData.filter(row => selected.includes(row.publicationType?.id));
  }, [selected, tableData]);

  useMemo(() => {
    onFilterChange(filteredData);
  }, [filteredData, onFilterChange]);

  return (
    <CheckBoxGroup
      id="publication-type-filter"
      options={publicationTypeOptions}
      value={selected}
      onChange={setSelected}
      flexDirection="row"
    />
  );
};

export default PublicationFilter;
