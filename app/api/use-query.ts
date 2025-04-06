import { useQuery as useTanstackQuery } from '@tanstack/react-query';
import { config } from '~/config/env';
//import base

export const useQuery = (endpoint: string) => {
  const query = useTanstackQuery({
    queryKey: [endpoint],
    queryFn: () => {
      //use axios
      const result = fetch(`${config.apiUrl}\\${endpoint}`).then(res => res.json());
      return result;
    }
  });

  return query;
};
