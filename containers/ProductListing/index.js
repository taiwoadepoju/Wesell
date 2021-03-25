import React from 'react';
import useFetch from 'use-http';
import { BASE_API_URL, api } from 'constants/index';
import { useRouter } from 'next/router';
import notify from 'utils/notify';
import Product from 'views/ProductListing';

const ProfileContainer = () => {
  const router = useRouter();

  const { post: createProduct, loading: creatingProduct } = useFetch(`${BASE_API_URL}${api.SINGLE_PRODUCT}`, {
    cachePolicy: 'no-cache',
    interceptors: {
      request: ({ options }) => {
        const token = localStorage.getItem('TOKEN');
        options.headers.Authorization = `Bearer ${token}`;
        return options;
      },

      response: ({ response }) => {
        if (response.status === 200) {
          notify.success('Product created successfully!');
          router.push('/product/list');
        } else {
          notify.error(`${response?.data?.message}`);
        }
      },
    },
  });

  const handleSubmit = (payload) => {
    createProduct(payload);
  };

  return (
    <>
      <Product
        creatingProduct={creatingProduct}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default ProfileContainer;
