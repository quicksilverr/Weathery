
import { useState, useCallback } from 'react';
import _ from 'lodash'

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

type LazyFetchReturn<T> = [
  (url: string, options?: RequestInit) => Promise<void>,
  FetchState<T>
];

export function useLazyFetch<T>(
    parseFunction?: (data: any) => T
): LazyFetchReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (url: string, options: RequestInit = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        ...options,
        method: 'GET',
      });


      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      let responseData =  await response.json();

      console.log(responseData, 'RESPIONSEE')

      if (!_.isNil(parseFunction)) {
        responseData = parseFunction(responseData);
      }

      console.log(responseData, 'RESPIONSEE 11')


      setData(responseData as T);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  return [fetchData, { data, loading, error }];
}