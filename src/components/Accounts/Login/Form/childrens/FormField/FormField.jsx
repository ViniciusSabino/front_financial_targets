import React from 'react';
import PropTypes from 'prop-types';

import { Component, Label, Input } from './styles';

const INPUT_TYPE = ['text', 'email', 'password'];

const LoginFormField = ({
  label, name, type, value, onChange,
}) => (
  <Component>
    <Label>{label}</Label>
    <Input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  </Component>
);

LoginFormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(INPUT_TYPE).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LoginFormField;
