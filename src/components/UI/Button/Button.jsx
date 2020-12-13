import React from 'react';
import PropTypes from 'prop-types';

import { Component } from './styles';

const BUTTON_TYPE = ['button', 'submit'];

const Button = ({ type, label, onClick }) => (
  <Component type={type} onClick={onClick}>
    {label}
  </Component>
);

Button.propTypes = {
  type: PropTypes.oneOf(BUTTON_TYPE).isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
