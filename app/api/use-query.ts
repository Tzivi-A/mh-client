import { useQuery as useTanstackQuery } from '@tanstack/react-query';
import axiosInstance from './axiosInstance';

export const useQuery = (endpoint: string) => {
  const query = useTanstackQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    }
  });

  return query;
};
