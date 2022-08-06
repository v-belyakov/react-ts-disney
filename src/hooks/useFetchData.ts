import type { AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CharactersData } from 'src/types';

axios.defaults.baseURL = 'https://api.disneyapi.dev';

const INIT_CHARACTERS_DATA: CharactersData = {
  count: 0,
  data: [],
  nextPage: '',
  previousPage: '',
  totalPages: 0,
};

type Params = AxiosRequestConfig & { single?: boolean };

export const useFetchCharacters = (axiosParams: Params) => {
  const [error, setError] = useState<AxiosError | unknown>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<CharactersData>(INIT_CHARACTERS_DATA);

  /**
  const getData = async () => {
    const response = await fetch('https://api.disneyapi.dev/characters');
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();

    return data?.data || [];
  };
  */

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      setLoading(true);

      const result = await axios.request(params);
      setData(
        (axiosParams.single
          ? {
              count: 0,
              data: [result.data],
              nextPage: '',
              previousPage: '',
              totalPages: 0,
            }
          : result.data) as CharactersData,
      );
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, [axiosParams.url]);

  return {
    data,
    error,
    loading,
  };
};
