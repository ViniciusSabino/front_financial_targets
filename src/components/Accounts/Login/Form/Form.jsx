/* eslint-disable no-alert */
import React, { useState } from 'react';

import service from './service';

import Field from '../FormField';
import Button from '../../../UI/Button';

import {
  Component,
  Form,
  Link,
  LoginActions,
  Error,
} from './styles';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [emailErrors, setEmailErrors] = useState([]);

  const [password, setPassword] = useState('');
  const [passwordErrors, setPasswordErrors] = useState([]);

  const handleChange = (event) => {
    const setValue = new Map([
      ['email', setEmail],
      ['password', setPassword],
    ]).get(event.target.name);

    setValue(event.target.value);
  };

  const handleLogin = () => {
    setEmail('');
    setPassword('');

    const validationErrors = service.validateLogin({ email, password });

    setEmailErrors(validationErrors.email);
    setPasswordErrors(validationErrors.password);
  };

  return (
    <Component>
      <Form>
        <Field
          label="E-mail"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        {!!emailErrors.length && emailErrors.map((message) => <Error>{message}</Error>)}
        <Field
          label="Senha"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        {!!passwordErrors.length && passwordErrors.map((message) => <Error>{message}</Error>)}
        <LoginActions>
          <Link href="http://google.com">Esqueci minha senha</Link>
          <Button type="button" label="Entrar" onClick={handleLogin} />
        </LoginActions>
      </Form>
    </Component>
  );
};

export default LoginForm;
