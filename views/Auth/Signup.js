/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import UserIcon from 'components/Icons/UserIcon';
import LockIcon from 'components/Icons/LockIcon';
import PropTypes from 'prop-types';
import notify from 'utils/notify';
import styles from './styles.module.css';

const Signup = ({ handleSignup, loading }) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const payload = {
      firstname,
      lastname,
      email: email.trim().toLowerCase(),
      mobile,
      password,
    };

    if (!firstname || !lastname || !email || !mobile || !password) {
      notify.error('All fields are required!');
      return;
    }

    handleSignup(payload);
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
              className={`${styles.input}`}
              placeholder="First Name"
              aria-label="First Name"
              aria-describedby="first name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputGroup>
        </div>
        <div className="w-75 mt-3">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text className={`${styles.inputicon}`} id="basic-addon1">
                <LockIcon />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              className={`${styles.input}`}
              placeholder="Last Name"
              aria-label="Last Name"
              aria-describedby="last name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </InputGroup>
        </div>
        <div className="w-75 mt-3">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text className={`${styles.inputicon}`} id="basic-addon1">
                <LockIcon />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              className={`${styles.input}`}
              placeholder="Email Address"
              aria-label="Email Address"
              aria-describedby="email address"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
        </div>
        <div className="w-75 mt-3">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text className={`${styles.inputicon}`} id="basic-addon1">
                <LockIcon />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              className={`${styles.input}`}
              placeholder="Phone Number"
              aria-label="Phone Number"
              aria-describedby="mobile number"
              autoComplete="off"
              type="number"
              value={mobile}
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputGroup>
        </div>
        <div className="w-75 mt-3">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text className={`${styles.inputicon}`} id="basic-addon1">
                <LockIcon />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              className={`${styles.input}`}
              placeholder="Password"
              aria-label="Password"
              aria-describedby="password"
              type="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
        </div>
      </div>

      <div className="row mt-4 justify-content-center">
        <button
          type="button"
          className={`${styles.submitbutton} btn btn-primary bg-Wesell-primary btn-block w-75`}
          onClick={() => handleSubmit()}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </div>
    </div>
  );
};

Signup.propTypes = {
  handleSignup: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Signup;
