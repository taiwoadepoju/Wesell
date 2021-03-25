/* eslint-disable no-underscore-dangle */
import useFetch from 'use-http';
import { BASE_API_URL, api } from 'constants/index';
import { useState } from 'react';

const useProductCategories = () => {
  const [data, setData] = useState([]);
  const { loading } = useFetch(`${BASE_API_URL}${api.GET_ALL_CATEGORIES}`, {
    // cachePolicy: 'no-cache',
    interceptors: {
      request: ({ options }) => {
        const token = localStorage.getItem('TOKEN');
        options.headers.Authorization = `Bearer ${token}`;
        return options;
      },
      response: ({ response }) => {
        if (response.status === 200) {
          setData(
            response?.data?.categories.map((item) => (
              { label: item.name, value: item._id }
            )),
          );
        }
      },
    },
  }, []);

  return {
    data,
    loading,
  };
};

export default useProductCategories;
