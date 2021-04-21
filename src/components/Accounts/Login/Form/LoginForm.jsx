/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';

import Field from '../FormField';
import Button from '../../../UI/Button';

import {
  Component,
  Form,
  Link,
  LoginActions,
  Error,
} from './styles';

const LoginForm = ({
  email,
  password,
  errors,
  handleChange,
  handleLogin,
}) => (
  <Component>
    <Form>
      <Field
        label="E-mail"
        name="email"
        type="email"
        value={email}
        onChange={handleChange}
      />
      {errors
        .filter((error) => error.field === 'email')
        .map((error) => <Error key={error.message}>{error.message}</Error>)}

      <Field
        label="Senha"
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
      />
      {errors
        .filter((error) => error.field === 'password')
        .map((error) => <Error key={error.message}>{error.message}</Error>)}

      <LoginActions>
        <Link href="http://google.com">Esqueci minha senha</Link>
        <Button type="button" label="Entrar" onClick={handleLogin} />
      </LoginActions>
    </Form>
  </Component>
);

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};
export default LoginForm;
