import React from 'react';
import PropTypes from 'prop-types';

import {
  Component,
  Title,
} from './styles';

interface IHeader {
  title: string,
}

const Header = ({ title }: IHeader): JSX.Element => (
  <Component>
    <Title>{title}</Title>
  </Component>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
