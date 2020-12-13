import React, { useState } from 'react';

import Field from '../FormField';
import Button from '../../../UI/Button';

import {
  Component,
  Form,
  Link,
  LoginActions,
} from './styles';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const setValue = new Map([
      ['email', setEmail],
      ['password', setPassword],
    ]).get(event.target.name);

    setValue(event.target.value);
  };

  const handleSubmit = () => {};

  return (
    <Component>
      <Form onSubmit={handleSubmit}>
        <Field
          label="E-mail"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <Field
          label="Senha"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <LoginActions>
          <Link href="http://google.com">Esqueci minha senha</Link>
          <Button type="button" label="Entrar" onClick={() => { }} />
        </LoginActions>
      </Form>
    </Component>
  );
};

export default LoginForm;
