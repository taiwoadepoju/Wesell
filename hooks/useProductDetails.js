/* eslint-disable no-underscore-dangle */
import useFetch from 'use-http';
import { BASE_API_URL, api } from 'constants/index';
import { useState } from 'react';

const useProductDetails = (id) => {
  const [data, setData] = useState({});
  const { loading } = useFetch(`${BASE_API_URL}${api.SINGLE_PRODUCT}/${id}`, {
    cachePolicy: 'no-cache',
    interceptors: {
      request: ({ options }) => {
        const token = localStorage.getItem('TOKEN');
        options.headers.Authorization = `Bearer ${token}`;
        return options;
      },
      response: ({ response }) => {
        if (response.status === 200) {
          setData(response?.data);
        }
      },
    },
  }, [id]);

  return {
    loading,
    data,
  };
};

export default useProductDetails;
