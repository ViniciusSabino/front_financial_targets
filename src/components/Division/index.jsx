import React from 'react';
import PropTypes from 'prop-types';

import {
  Component,
  Title,
} from './styles';

const Division = ({ title }) => (
  <Component>
    <Title>{title}</Title>
  </Component>
);

Division.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Division;
