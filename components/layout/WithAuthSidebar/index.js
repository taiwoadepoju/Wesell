// eslint-disable-next-line jsx-a11y/click-events-have-key-events
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import AuthSidebar from './AuthSidebar';

const Auth = ({ children }) => (
  <div className="">
    <div className={`${styles.fullSection} row justify-content-center`}>
      <AuthSidebar />
      <div className={`${styles.halves} ${styles.righthalf}  col-sm-3`}>
        {children}
      </div>
    </div>
  </div>
);

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth;
