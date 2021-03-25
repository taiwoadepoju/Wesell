import React, { useEffect, useState } from 'react';
import useFetch from 'use-http';
import { BASE_API_URL, api } from 'constants/index';
import ViewProducts from 'views/ProductListing/ViewProducts';
import useAuth from 'hooks/useAuth';

const ProfileContainer = () => {
  const [products, setProducts] = useState([]);
  const { userId } = useAuth();
  const { get: fetchProducts, loading: lodingProducts } = useFetch(`${BASE_API_URL}${api.GET_ALL_PRODUCTS}/seller/${userId}/all`, {
    cachePolicy: 'no-cache',
    interceptors: {
      request: ({ options }) => {
        const token = localStorage.getItem('TOKEN');
        options.headers.Authorization = `Bearer ${token}`;
        return options;
      },

      response: ({ response }) => {
        if (response.status === 200) {
          setProducts(response?.data?.products);
        }
      },
    },
  });

  useEffect(() => {
    if (!userId) return;
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const handleFetchProducts = (payload) => {
    fetchProducts(payload);
  };

  return (
    <>
      <ViewProducts
        lodingProducts={lodingProducts}
        handleFetchProducts={handleFetchProducts}
        products={products}
      />
    </>
  );
};

export default ProfileContainer;
