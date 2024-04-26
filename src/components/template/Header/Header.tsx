import React from 'react';
import { Link } from 'react-router-dom';

import Style from './styles';

const { Component, Title } = Style;

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps): JSX.Element => (
  <Component>
    <Link to={{ pathname: '/inicio' }}>
      <Title>{title}</Title>
    </Link>
  </Component>
);

export default Header;
