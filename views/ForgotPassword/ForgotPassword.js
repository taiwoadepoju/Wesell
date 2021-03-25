import { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ForgotPassword = ({ loading, handleSubmit }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    handleSubmit(email);
  };

  return (
    <div className={`${styles.container} container`}>
      <div className="row justify-content-center">
        <div className={`${styles.mainsection} col-sm-6 align-self-center pt-5`}>
          <h5 className={`${styles.Weselltext} text-center`}><a href="/">Wesell</a></h5>
          <h4 className="text-muted text-center">Password Reset</h4>
          <p className="text-muted text-center">Just enter the email you signed up with and we&apos;ll let you reset it.</p>
          <div className="mx-auto w-75 mt-5">
            <InputGroup>
              <FormControl
                className={`${styles.input}`}
                placeholder="Enter email"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </div>
          <button
            onClick={() => handleForgotPassword()}
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

ForgotPassword.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ForgotPassword;
