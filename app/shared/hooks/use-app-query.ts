/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult as UseQueryResultTanstack
} from '@tanstack/react-query';
import axios from 'axios';
import { createQueryString, getQueryKey, type QueryDataType } from '~/utils/api-utils';
import { config } from '~/config/env';

export interface UseAppQueryOptions<DATA, MAPPED_DATA = DATA> {
  url: string;
  method?: 'GET' | 'POST';
  queryData?: QueryDataType;
  queryOptions?: Omit<UseQueryOptions<MAPPED_DATA>, 'queryKey' | 'queryFn' | 'enabled'>;
  isRunNow?: boolean;
  isMock?: boolean;
  mapResponse?: (data: DATA) => MAPPED_DATA;
}

export const useAppQuery = <DATA = void, MAPPED_DATA = DATA>(
  options: UseAppQueryOptions<DATA, MAPPED_DATA>
) => {
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

  const query = useQuery<MAPPED_DATA>({
    queryKey: getQueryKey(options.url, options.method || 'GET', options.queryData || {}),
    queryFn: async () => {
      const rawData = await performQuery(
        options.url,
        options?.method,
        options?.queryData?.queryStringData,
        options?.queryData?.requestData
      );
      return options.mapResponse
        ? options.mapResponse(rawData)
        : (rawData as unknown as MAPPED_DATA);
    },
    enabled: options.isRunNow ?? true,
    ...(options?.queryOptions || {})
  });

  return query;
};

export type UseQueryResult<TData, TError> = UseQueryResultTanstack<TData, TError>;
