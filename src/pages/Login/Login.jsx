import React from 'react';

import { APPLICATION_NAME } from '../../utils/constants';

import LoginFormContainer from '../../components/Accounts/Login/Form/LoginFormContainer';

import {
  Page,
  Component,
  ComponentTitle,
  ComponentLogin,
  Title,
} from './styles';

const Login = () => (
  <Page>
    <Component>
      <ComponentTitle>
        <Title>{APPLICATION_NAME}</Title>
      </ComponentTitle>
      <ComponentLogin>
        <LoginFormContainer />
      </ComponentLogin>
    </Component>
  </Page>
);

export default Login;
