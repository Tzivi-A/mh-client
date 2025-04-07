/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import axios from 'axios';
import { createQueryString, getQueryKey, type QueryDataType } from '~/utils/api';
import { config } from '~/config/env';

export interface UseAppQueryOptions<DATA> {
  url: string;
  method?: 'GET' | 'POST';
  queryData: QueryDataType;
  queryOptions?: Omit<UseQueryOptions<DATA>, 'queryKey' | 'queryFn'>;
}

export const useAppQuery = <DATA = void>(options: UseAppQueryOptions<DATA>) => {
  const performQuery = async (
    url: string,
    method?: string,
    queryStringData?: any,
    requestData?: any
  ) => {
    const route = config.isMock
      ? `${window.location.origin}/mocks/${url}.json`
      : `${url.startsWith('http://') || url.startsWith('https://') ? '' : `${config.apiUrl}/`}${url}`;

    try {
      if (config.isMock) {
        const response = await fetch(route);
        if (!response.ok) throw new Error('Failed to fetch mock data');
        return (await response.json()) as DATA;
      } else {
        const response = await axios.request({
          method: method || 'GET',
          url: `${route}${queryStringData ? `?${createQueryString(queryStringData)}` : ''}`,
          data: requestData
        });

        return response.data as DATA;
      }
    } catch (error) {
      throw new Error(`Request failed: ${error}`);
    }
  };

  const query = useQuery<DATA>({
    //TODO: think which query key is relevant for us
    queryKey: getQueryKey(options.url, options.method || 'GET', options.queryData),
    queryFn: () =>
      performQuery(
        options.url,
        options?.method,
        options?.queryData.queryStringData,
        options?.queryData.requestData
      ),
    ...(options?.queryOptions || {})
  });

  return query;
};
