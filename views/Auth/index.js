// eslint-disable-next-line jsx-a11y/click-events-have-key-events
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WithAuthSidebar from 'components/layout/WithAuthSidebar';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import Login from './Login';
import Signup from './Signup';

const Auth = ({
  handleSignup, handleLogin, loadingLogin, loadingSignup,
}) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <WithAuthSidebar>
      <div className="row justify-content-center align-items-center pt-3">
        <p className="text-center">
          <button
            className={`${isLogin && styles.selectedauthmenu} ${styles.pointercursor} pl-5 pr-5 text-muted btn btn-outline-light`}
            onClick={() => setIsLogin(true)}
            type="button"
          >
            Log In
          </button>
          <button
            className={`${!isLogin && styles.selectedauthmenu} ${styles.pointercursor} pl-5 pr-5 text-muted btn btn-outline-light`}
            onClick={() => setIsLogin(false)}
            type="button"
          >
            Sign Up
          </button>
        </p>
      </div>

      <p className={`${styles.infotext} text-center text-muted pt-3 pb-5`}>
        {`${isLogin ? 'Log in' : 'Sign up'} with your social network`}
      </p>
      <div className="row justify-content-center">
        <div className="col-6">
          <button
            onClick={() => router.push('https://Wesell.com/v1/users/google/login')}
            href="/"
            type="button"
            className={`${styles.googlebtn} btn btn-danger font-proxima rounded-pill px-4`}
          >
            Google
          </button>
        </div>
        <div>
          <div className="col-6">
            <button
              onClick={() => router.push('https://Wesell.com/v1/users/facebook/login')}
              type="button"
              className={`${styles.facebookbtn} btn btn-primary font-proxima rounded-pill px-4`}
            >
              Facebook
            </button>
          </div>
        </div>
      </div>

      <div>
        <p className="font-circularstd text-center">Or</p>
      </div>
      {isLogin
        ? <Login handleLogin={handleLogin} loading={loadingLogin} />
        : <Signup handleSignup={handleSignup} loading={loadingSignup} />}
    </WithAuthSidebar>

  );
};

Auth.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  loadingLogin: PropTypes.bool.isRequired,
  loadingSignup: PropTypes.bool.isRequired,
};

export default Auth;
