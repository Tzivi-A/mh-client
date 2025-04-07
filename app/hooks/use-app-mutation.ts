/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import axios from 'axios';
import { config } from '~/config/env';
import type { DataObject } from '~/types/api';
import { createQueryString } from '~/utils/api';

export interface MutationData {
  queryStringData?: DataObject;
  requestData?: DataObject;
}

export interface UseAppMutationOptions<DATA> {
  url: string;
  method?: 'GET' | 'POST' | 'PUT';
  mutationOptions?: Omit<UseMutationOptions<DATA, any, MutationData, any>, 'mutationFn'>;
}

export const useAppMutation = <DATA>(options: UseAppMutationOptions<DATA>) => {
  const performMutation = async (url: string, method?: string, data?: MutationData) => {
    const route = config.isMock
      ? `${window.location.origin}/mocks/${url}.json`
      : `${url.startsWith('http://') || url.startsWith('https://') ? '' : `${config.apiUrl}/`}${url}`;

    try {
      if (config.isMock) {
        // Use fetch for mock data
        const response = await fetch(
          `${route}${data?.queryStringData ? `?${createQueryString(data?.queryStringData)}` : ''}`,
          {
            method: method || 'POST'
          }
        );

        if (!response.ok) throw new Error('Failed to fetch mock data');
        return (await response.json()) as DATA;
      } else {
        // Use axios for real API requests
        const response = await axios.request({
          method: method || 'POST',
          url: `${route}${data?.queryStringData ? `?${createQueryString(data?.queryStringData)}` : ''}`,
          data: data?.requestData
        });

        return response.data as DATA;
      }
    } catch (error) {
      throw new Error(`Request failed: ${error}`);
    }
  };

  const mutate = useMutation<DATA, any, MutationData, any>({
    mutationKey: [options.url, options.method],
    mutationFn: (data: MutationData) => performMutation(options.url, options.method, data),
    ...(options?.mutationOptions || {})
  });

  return mutate;
};
