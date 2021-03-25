/* eslint-disable no-param-reassign */
import React from 'react';
import useFetch from 'use-http';
import { BASE_API_URL, api } from 'constants/index';
import { useRouter } from 'next/router';
import notify from 'utils/notify';
import ResetPassword from 'views/ForgotPassword/ResetPassword';

const ResetPasswordContainer = () => {
  const router = useRouter();

  const { post: resetPassword, loading } = useFetch(`${BASE_API_URL}${api.RESET_PASSWORD}`, {
    cachePolicy: 'no-cache',
    interceptors: {
      request: ({ options }) => {
        const token = localStorage.getItem('TOKEN');
        options.headers.Authorization = `Bearer ${token}`;
        return options;
      },

      response: ({ response }) => {
        if (response.status === 200) {
          console.log('reset pass res', response);
          localStorage.setItem('TOKEN', response.data.token);
          router.push('/forgotpassword/success');
        } else {
          notify.error(`${response?.data?.message}`);
        }
      },
    },
  });

  const handleSubmit = (payload) => {
    resetPassword(payload);
  };

  return (
    <>
      <ResetPassword
        loading={loading}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default ResetPasswordContainer;
