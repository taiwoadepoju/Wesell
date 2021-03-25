import { useState, useEffect } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import notify from 'utils/notify';
import styles from './styles.module.css';

const ResetPassword = ({ loading, handleSubmit }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  useEffect(() => {
    // Check if app is running on the server before accessing local storage
    const ISSERVER = typeof window === 'undefined';
    if (!ISSERVER) {
      // Access localStorage
      const userIdInfo = localStorage.getItem('USERID');
      setUserId(userIdInfo);
    }
  }, []);

  const handleResetPassword = () => {
    if (!password || !repeatedPassword) {
      notify.error('Password fields are required!');
      return;
    }

    if (password !== repeatedPassword) {
      notify.error('Passwords do not match!');
      return;
    }

    const payload = { password, userId };
    handleSubmit(payload);
  };

  return (
    <div className={`${styles.container} container`}>
      <div className="row justify-content-center">
        <div className={`${styles.mainsection} col-sm-6 align-self-center pt-5`}>
          <h5 className={`${styles.Weselltext} text-center`}><a href="/">Wesell</a></h5>
          <h4 className="text-muted text-center">Password Update</h4>
          <p className="text-muted text-center">Create a new password</p>
          <div className="mx-auto w-75 mt-3">
            <InputGroup>
              <FormControl
                className={`${styles.input}`}
                placeholder="New Password"
                aria-label="New Password"
                aria-describedby="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </div>
          <div className="mx-auto w-75 mt-3">
            <InputGroup>
              <FormControl
                className={`${styles.input}`}
                placeholder="Repeat Password"
                aria-label="Repeat Password"
                aria-describedby="repeat-password"
                value={repeatedPassword}
                onChange={(e) => setRepeatedPassword(e.target.value)}
              />
            </InputGroup>
          </div>
          <button
            onClick={() => handleResetPassword()}
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

ResetPassword.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ResetPassword;
