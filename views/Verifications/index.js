// eslint-disable-next-line jsx-a11y/click-events-have-key-events
import React from 'react';
import WithAuthSidebar from 'components/layout/WithAuthSidebar';
import VerifySignup from 'containers/Verifications/VerifySignup';

const Auth = () => (
  <WithAuthSidebar>
    <h3 className="text-center text-muted pt-5 pb-6">Verification</h3>
    <p className="text-center text-muted pt-3 pb-6">
      Please enter the code sent to your email address.
    </p>
    <VerifySignup />
  </WithAuthSidebar>
);

export default Auth;
