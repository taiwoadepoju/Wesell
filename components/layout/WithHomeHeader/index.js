import React from 'react';
import PropTypes from 'prop-types';
import MainHeader from 'components/MainHeader';

const WithHomeHeader = ({ children }) => (
  <div>
    <MainHeader />
    {children}
  </div>
);

WithHomeHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithHomeHeader;
