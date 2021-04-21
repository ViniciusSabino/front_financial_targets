/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';

import service from './service';

import LoginForm from './LoginForm';

const LoginFormContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  const resetLogin = () => {
    setValidationErrors([]);
  };

  const handleChange = (event) => {
    const setValue = new Map([
      ['email', setEmail],
      ['password', setPassword],
    ]).get(event.target.name);

    setValue(event.target.value);
  };

  const handleLogin = () => {
    const errors = service.validateLogin({ email, password });

    setValidationErrors(errors);

    if (!errors.length) {
      resetLogin();
      alert('LOGIN OK');
    }
  };

  return (
    <LoginForm
      email={email}
      password={password}
      errors={validationErrors}
      handleChange={handleChange}
      handleLogin={handleLogin}
    />
  );
};

export default LoginFormContainer;
