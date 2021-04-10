import React from 'react';
import PropTypes from 'prop-types';

import {
  Component,
  Title,
} from './styles';

const Header = ({ title }) => (
  <Component>
    {/* TODO: Adicionar componente MENU */}
    <Title>{title}</Title>
  </Component>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
