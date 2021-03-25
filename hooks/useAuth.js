import { useState, useEffect } from 'react';
import _ from 'lodash';

/**
 * Provides user auth
 */
const useAuth = () => {
  const [userInfo, setUserInfo] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    // Check if app is running on the server before accessing local storage
    const ISSERVER = typeof window === 'undefined';
    if (!ISSERVER) {
      // Access localStorage
      const userInformation = localStorage.getItem('USER_INFO') ? JSON.parse(localStorage.getItem('USER_INFO')) : {};
      const tokenInfo = localStorage.getItem('TOKEN');
      setUserInfo(userInformation);
      setToken(tokenInfo);
    }
  }, []);

  const user = _.omit(userInfo?.user, ['token']);

  return {
    token,
    userId: userInfo?.userId,
    ...user,
  };
};

export default useAuth;
