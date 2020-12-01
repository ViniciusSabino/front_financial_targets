import React from 'react';

import {
  Page,
  Component,
  LoginLogo,
  LoginForm,
  Title,
} from './styles';

const Login = () => (
  <Page>
    <Component>
      <LoginLogo>
        <Title>
          Financial Targets
        </Title>
      </LoginLogo>
      <LoginForm />
    </Component>
  </Page>
);

export default Login;
