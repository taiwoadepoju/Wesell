import React, { useState } from 'react';
import { InputGroup, FormControl, FormCheck } from 'react-bootstrap';
import UserIcon from 'components/Icons/UserIcon';
import LockIcon from 'components/Icons/LockIcon';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Login = ({ handleLogin, loading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };
    handleLogin(payload);
  };

  return (
    <div>
      <div className="row justify-content-center mx-auto">
        <div className="w-75 mt-2">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text className={`${styles.inputicon}`} id="basic-addon1">
                <UserIcon />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              className={`${styles.input} font-proxima`}
              placeholder="Username or email"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
        </div>
        <div className="w-75 mt-4">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text className={`${styles.inputicon}`} id="basic-addon1">
                <LockIcon />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              className={`${styles.input} font-proxima`}
              placeholder="Password"
              aria-label="Username"
              aria-describedby="basic-addon1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
        </div>
      </div>

      <div className="row mt-4 justify-content-center">
        <FormCheck label="Remember Me" className="text-muted mr-5" />
        <p className="text-muted"><a href="/forgotpassword">Forgot Password?</a></p>
      </div>

      <div className="row mt-4 justify-content-center">
        <button
          disabled={!email || !password}
          type="button"
          className={`${styles.submitbutton} btn btn-primary btn-block w-75`}
          onClick={() => handleSubmit()}
        >
          {loading ? 'Logging In...' : 'Log In'}
        </button>
      </div>
    </div>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Login;
