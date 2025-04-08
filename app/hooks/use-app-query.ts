/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import axios from 'axios';
import { createQueryString, getQueryKey, type QueryDataType } from '~/utils/api';
import { config } from '~/config/env';

export interface UseAppQueryOptions<DATA> {
  url: string;
  method?: 'GET' | 'POST';
  queryData?: QueryDataType;
  queryOptions?: Omit<UseQueryOptions<DATA>, 'queryKey' | 'queryFn' | 'enabled'>;
  isNow?: boolean;
  isMock?: boolean;
}

export const useAppQuery = <DATA = void>(options: UseAppQueryOptions<DATA>) => {
  const performQuery = async (
    url: string,
    method?: string,
    queryStringData?: any,
    requestData?: any
  ) => {
    const route = `${!url.startsWith('http') ? `${config.apiUrl}/` : ''}${url}`;
    const response = await axios.request({
      method: method || 'GET',
      url: `${route}${queryStringData ? `?${createQueryString(queryStringData)}` : ''}`,
      data: requestData
    });

    return response.data as DATA;
  };

  const query = useQuery<DATA>({
    queryKey: getQueryKey(options.url, options.method || 'GET', options.queryData || {}),
    queryFn: () =>
      performQuery(
        options.url,
        options?.method,
        options?.queryData?.queryStringData,
        options?.queryData?.requestData
      ),
    enabled: options.isNow ?? true,
    ...(options?.queryOptions || {})
  });

  return query;
};
