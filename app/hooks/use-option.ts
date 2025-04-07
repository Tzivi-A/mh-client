import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../api/axios-instance';
import type { SelectOption } from '../types/select-option';
import { useQuery } from '../api/use-query';

// Insert a new option to the server
const insertNewOption = async (newOption: SelectOption): Promise<SelectOption> => {
  const response = await axiosInstance.post('/api/options/createOption', {
    label: newOption.label
  });
  return response.data;
};

// Custom hook for options
export const useOption = () => {
  const queryClient = useQueryClient();

  // Fetching options
  const optionsQuery = useQuery('/api/options/getOptions');

  // Mutation for adding a new option
  const addOptionMutation = useMutation({
    mutationFn: insertNewOption,
    onSuccess: () => {
      // Invalidate the query to refetch data
      queryClient.invalidateQueries({ queryKey: ['option'] });
    }
  });

  return {
    optionsQuery,
    addOption: addOptionMutation.mutateAsync
  };
};
