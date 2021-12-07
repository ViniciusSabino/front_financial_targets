import React from 'react';
import PropTypes from 'prop-types';

import {
  Component,
  Title,
} from './styles';

interface HeaderProps {
  title: string,
}

const Header = ({ title }: HeaderProps): JSX.Element => (
  <Component>
    <Title>{title}</Title>
  </Component>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
