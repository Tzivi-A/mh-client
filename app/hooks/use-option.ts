import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';
import type { Option } from '../types/option';

const getOption = async (): Promise<Option[]> => {
  const response = await axiosInstance.get(`/options/getOptions`);
  return response.data;
};

export const useOption = () => {
  return useQuery({
    queryKey: ['option'],
    queryFn: () => getOption()
  });
};
