import React from 'react';
import VerifySignup from 'views/Verifications/VerifySignup';
import useFetch from 'use-http';
import { BASE_API_URL, api } from 'constants/index';
import { useRouter } from 'next/router';
import notify from 'utils/notify';

const VerifySignupContainer = () => {
  const router = useRouter();

  const { get: activateUser, loading } = useFetch(`${BASE_API_URL}${api.ACTIVATE_USER}`, {
    cachePolicy: 'no-cache',
    interceptors: {
      response: ({ response }) => {
        if (response.status === 200) {
          // console.log('verify res', response);
          // localStorage.setItem('TOKEN', response.data.token);
          // localStorage.setItem('USERID', response.data.userId);
          notify.success('Verification successful!');
          router.push('/profile');
        } else {
          notify.error(`${response?.data?.message}`);
        }
      },
    },
  });

  const handleSubmit = (userId, code) => {
    activateUser(`/${userId}/${code}/user`);
  };

  return (
    <>
      <VerifySignup
        loading={loading}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default VerifySignupContainer;
