import React from 'react';

import { HeaderTitle } from '../../atoms';

import Styles from './styles';

const { Component } = Styles;

const Header = (): JSX.Element => (
  <Component>
    <HeaderTitle value="Financial Targets" />
  </Component>
);

export default Header;
