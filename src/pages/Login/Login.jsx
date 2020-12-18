import React from 'react';

import LoginForm from '../../components/Accounts/Login/Form';

import {
  Page,
  Component,
  CardTitle,
  CardLogin,
  Title,
} from './styles';

const Login = () => (
  <Page>
    <Component>
      <CardTitle>
        <Title>
          Financial Targets
        </Title>
      </CardTitle>
      <CardLogin>
        <LoginForm />
      </CardLogin>
    </Component>
  </Page>
);

export default Login;
