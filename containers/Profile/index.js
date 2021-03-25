import React from 'react';
import useFetch from 'use-http';
import { BASE_API_URL, api } from 'constants/index';
// import { useRouter } from 'next/router';
import notify from 'utils/notify';
import Profile from 'views/Profile';
import useAuth from 'hooks/useAuth';

const ProfileContainer = () => {
  const { userId, token } = useAuth();
  // const router = useRouter();

  const { patch: updateUserProfile, loading } = useFetch(`${BASE_API_URL}${api.UPDATE_USER_PROFILE}/${userId}`, {
    cachePolicy: 'no-cache',
    interceptors: {
      request: ({ options }) => {
        options.headers.Authorization = `Bearer ${token}`;
        return options;
      },

      response: ({ response }) => {
        if (response.status === 200) {
          notify.success('Profile updated successfully!');
          console.log('profile res', response);
          // router.reload();
        } else {
          notify.error(`${response?.data?.message}`);
        }
      },
    },
  });

  const handleSubmit = (payload) => {
    updateUserProfile(payload);
  };

  return (
    <>
      <Profile
        loading={loading}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default ProfileContainer;
