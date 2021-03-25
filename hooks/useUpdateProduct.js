/* eslint-disable no-underscore-dangle */
import useFetch from 'use-http';
import { BASE_API_URL, api } from 'constants/index';
import { useState } from 'react';
import notify from 'utils/notify';

const useUpdateProduct = () => {
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const { loading, patch } = useFetch(`${BASE_API_URL}${api.SINGLE_PRODUCT}`, {
    cachePolicy: 'no-cache',
    interceptors: {
      request: ({ options }) => {
        const token = localStorage.getItem('TOKEN');
        options.headers.Authorization = `Bearer ${token}`;
        return options;
      },
      response: ({ response }) => {
        if (response.status === 200) {
          setUpdateSuccess(true);
          notify.success('Update Successful');
        } else {
          notify.error(response?.data?.message);
        }
      },
    },
  });

  const handleUpdateProduct = (productId, payload) => {
    patch(`/${productId}`, payload);
  };

  return {
    updateSuccess,
    loading,
    handleUpdateProduct: (productId, payload) => handleUpdateProduct(productId, payload),
  };
};

export default useUpdateProduct;
