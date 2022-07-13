import React from 'react';

import { Title } from '../../atoms';

import { HeaderStyle } from './styles';

interface HeaderProps {
  title: string,
}

const Header = ({ title }: HeaderProps): JSX.Element => (
  <HeaderStyle>
    <Title text={title} />
  </HeaderStyle>
);

export default Header;
