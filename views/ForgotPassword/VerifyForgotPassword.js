import { useState } from 'react';
import PropTypes from 'prop-types';
import ReactCodeInput from 'react-verification-code-input';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

const VerifyForgotPassword = ({ handleSubmit, loading }) => {
  const router = useRouter();
  const { email } = router.query;

  const [code, setCode] = useState('');

  const handleVerify = () => {
    const payload = { email, token: code };
    handleSubmit(payload);
  };

  return (
    <div className={`${styles.container} container`}>
      <div className="row justify-content-center">
        <div className={`${styles.mainsection} col-md-6 align-self-center pt-5`}>
          <h5 className={`${styles.Weselltext} text-center`}><a href="/">Wesell</a></h5>
          <h4 className="text-muted text-center">Verification</h4>
          <p className="text-muted text-center">Enter the code sent to your email address.</p>
          <div className="mx-auto mt-5 w-50">
            <ReactCodeInput
              fields={4}
              loading={loading}
              autoFocus
              className="mx-auto"
              onChange={(e) => setCode(e)}
            />
          </div>
          <button
            onClick={() => handleVerify()}
            disabled={loading}
            type="button"
            className={`${styles.submitbutton} btn btn-primary btn-block w-50 mt-4 mx-auto`}
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

VerifyForgotPassword.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default VerifyForgotPassword;
