import { useQueryClient } from '@tanstack/react-query';
import type { SelectOption } from '../types/select-option';
import { useAppQuery } from './use-app-query';
import { useAppMutation } from './use-app-mutation';

// Custom hook for options
export const useOption = () => {
  const queryClient = useQueryClient();

  // Fetching options
  const optionsQuery = useAppQuery<SelectOption[]>({
    url: 'api/options/getOptions',
    queryData: {}
  });

  // Mutation for adding a new option using useAppMutation
  const addOptionMutation = useAppMutation<SelectOption>({
    url: 'api/options/createOption',
    method: 'POST',
    mutationOptions: {
      onSuccess: () => {
        // Invalidate the query to refetch data
        queryClient.invalidateQueries({ queryKey: ['option'] });
      }
    }
  });

  return {
    optionsQuery,
    addOption: (newOption: SelectOption) =>
      addOptionMutation.mutateAsync({
        requestData: { label: newOption.label }
      })
  };
};
