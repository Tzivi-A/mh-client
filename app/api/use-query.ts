import { useQuery as useTanstackQuery } from '@tanstack/react-query';
//import base

export const useQuery = (endpoint: string) => {
  const query = useTanstackQuery({
    queryKey: [endpoint],
    queryFn: () => {
      //use axios
      const result = fetch(`${import.meta.env.VITE_API_URL}\\${endpoint}`).then(res => res.json());
      return result;
    }
  });

  return query;
};
