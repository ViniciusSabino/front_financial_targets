import React from 'react';

import Style from './styles';

const { HeaderStyle, Title } = Style;

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps): JSX.Element => (
  <HeaderStyle>
    <Title>{title}</Title>
  </HeaderStyle>
);

export default Header;
