/* eslint-disable import/no-unresolved */
import React, { useState, useLayoutEffect } from 'react';
import ReactCodeInput from 'react-verification-code-input';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const VerifySignup = ({ handleSubmit, loading }) => {
  const [code, setCode] = useState('');
  const [userId, setUserId] = useState('');

  useLayoutEffect(() => {
    // Check if app is running on the server before accessing local storage
    const ISSERVER = typeof window === 'undefined';
    if (!ISSERVER) {
      // Access localStorage
      const userIdInfo = localStorage.getItem('USERID');
      setUserId(userIdInfo);
    }
  }, []);

  const handleVerify = () => {
    handleSubmit(userId, code);
  };

  return (
    <div>
      <div className="row justify-content-center mx-auto align-items-center">
        <div className="mt-5">
          <ReactCodeInput
            fields={5}
            loading={loading}
            autoFocus
            className={styles.codeinput}
            onChange={(e) => setCode(e)}
          />
        </div>
      </div>

      <div className="row mt-4 justify-content-center">
        <button
          onClick={() => handleVerify()}
          disabled={loading || code.length < 5}
          type="button"
          className={`${styles.submitbutton} btn btn-primary btn-block w-75 rounded-pill`}
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

VerifySignup.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default VerifySignup;
