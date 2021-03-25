import React from 'react';
import Auth from 'views/Auth';
import useFetch from 'use-http';
import { BASE_API_URL, api } from 'constants/index';
import { useRouter } from 'next/router';
import notify from 'utils/notify';

const AuthContainer = () => {
  const router = useRouter();

  const createUserAccount = useFetch(`${BASE_API_URL}${api.CREATE_USER}`, {
    cachePolicy: 'no-cache',
    interceptors: {
      response: ({ response }) => {
        if (response.status === 200) {
          localStorage.setItem('TOKEN', response?.data.token);
          localStorage.setItem('USERID', response?.data.userId);
          localStorage.setItem('USER_INFO', JSON.stringify(response?.data));
          router.push('/verification');
        } else {
          notify.error(`${response?.data?.message}`);
        }
      },
    },
  });

  const loginUser = useFetch(`${BASE_API_URL}${api.LOGIN}`, {
    cachePolicy: 'no-cache',
    interceptors: {
      response: ({ response }) => {
        if (response.status === 200) {
          router.push('/profile');
          localStorage.setItem('TOKEN', response?.data.token);
          localStorage.setItem('USERID', response?.data.userId);
          localStorage.setItem('USER_INFO', JSON.stringify(response?.data));
        } else {
          notify.error(`${response?.data?.message}`);
        }
      },
    },
  });

  const handleSignup = (payload) => {
    createUserAccount.post(payload);
  };

  const handleLogin = (payload) => {
    loginUser.post(payload);
  };

  return (
    <>
      <Auth
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        loadingLogin={loginUser.loading}
        loadingSignup={createUserAccount.loading}
      />
    </>
  );
};

export default AuthContainer;
