import type { DataObject } from '~/types/api';

export const createQueryString = (params: DataObject) => {
  if (!params || typeof params !== 'object') {
    return '';
  }

  return Object.entries(params)
    .filter(([value]) => value !== undefined && value !== null)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value
          .map(item => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`)
          .join('&');
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join('&');
};

export interface QueryDataType {
  // url: string;
  // method?: 'GET' | 'POST';
  queryStringData?: DataObject;
  requestData?: DataObject;
}

export const getQueryKey = (url: string, method: 'GET' | 'POST', params: QueryDataType) =>
  [url, method, params?.queryStringData, params?.requestData].filter(Boolean);
