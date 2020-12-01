import React from 'react';

import LoginForm from '../../components/LoginForm';

import {
  Page,
  Component,
  LogoContainer,
  LoginContainer,
  Title,
} from './styles';

const Login = () => (
  <Page>
    <Component>
      <LogoContainer>
        <Title>
          Financial Targets
        </Title>
      </LogoContainer>
      <LoginContainer>
        <LoginForm />
      </LoginContainer>
    </Component>
  </Page>
);

export default Login;
