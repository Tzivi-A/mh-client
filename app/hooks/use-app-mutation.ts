/* eslint-disable @typescript-eslint/no-explicit-any */
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
  isMock?: boolean;
}

export const useAppMutation = <DATA>(options: UseAppMutationOptions<DATA>) => {
  const performMutation = async (url: string, method?: string, data?: MutationData) => {
    const route = `${!url.startsWith('http') ? `${config.apiUrl}/` : ''}${url}`;

    const response = await axios.request({
      method: method || 'POST',
      url: `${route}${data?.queryStringData ? `?${createQueryString(data?.queryStringData)}` : ''}`,
      data: data?.requestData
    });

    return response.data as DATA; // Ensure the mutation returns the response data
  };

  const mutate = useMutation<DATA, any, MutationData, any>({
    mutationKey: [options.url, options.method],
    mutationFn: (data: MutationData) => performMutation(options.url, options.method, data),
    ...(options?.mutationOptions || {})
  });

  return mutate;
};
