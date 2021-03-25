import React, { useState } from 'react';
import useFetch from 'use-http';
import { BASE_API_URL, api } from 'constants/index';
import { useRouter } from 'next/router';
import notify from 'utils/notify';
import ForgotPassword from 'views/ForgotPassword/ForgotPassword';

const ForgotPasswordContainer = () => {
  const [emailAddress, setEmail] = useState('');
  const router = useRouter();

  const { get: forgotPassword, loading } = useFetch(`${BASE_API_URL}${api.FORGOT_PASSWORD}`, {
    cachePolicy: 'no-cache',
    interceptors: {
      response: ({ response }) => {
        if (response.status === 200) {
          console.log('forgot password res', response);
          // localStorage.setItem('TOKEN', response.data.token);
          // localStorage.setItem('USERID', response.data.userId);
          router.push(`/forgotpassword/verify?email=${emailAddress}`);
        } else {
          notify.error(`${response?.data?.message}`);
        }
      },
    },
  });

  const handleSubmit = (email) => {
    setEmail(email);
    forgotPassword(`/${email}`);
  };

  return (
    <>
      <ForgotPassword
        loading={loading}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default ForgotPasswordContainer;
