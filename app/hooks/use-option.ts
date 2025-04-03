import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';
import type { Option } from '../types/option';

// Fetch options from the server
const getOption = async (): Promise<Option[]> => {
  const response = await axiosInstance.get('/options/getOptions');
  return response.data;
};

// Insert a new option to the server
const insertNewOption = async (newOption: Option): Promise<Option> => {
  const response = await axiosInstance.post('/options/createOption', { label: newOption.label });
  return response.data;
};

// Custom hook for options
export const useOption = () => {
  const queryClient = useQueryClient();

  // Fetching options
  const optionsQuery = useQuery({
    queryKey: ['option'],
    queryFn: () => getOption()
  });

  // Mutation for adding a new option
  const addOptionMutation = useMutation({
    mutationFn: insertNewOption,
    onSuccess: () => {
      // Invalidate the query to refetch data
      queryClient.invalidateQueries({ queryKey: ['option'] });
    }
  });

  return {
    ...optionsQuery,
    addOption: addOptionMutation.mutateAsync
  };
};
