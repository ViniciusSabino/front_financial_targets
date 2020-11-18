import React from 'react';

import {
  Page,
  Component,
  Logo,
  LoginForm,
  Title,
} from './styles';

const Login = () => (
  <Page>
    <Component>
      <Logo>
        <Title>
          <h1>Financial Targets</h1>
        </Title>
      </Logo>
      <LoginForm />
    </Component>
  </Page>
);

export default Login;
