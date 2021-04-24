import React from 'react';
import PropTypes from 'prop-types';

import {
  Component,
  ComponentTitle,
  Title,
  ComponentValue,
  Value,
} from './styles';

const SummaryClosing = ({ position, description, value }) => (
  <Component position={position}>
    <ComponentTitle position={position}>
      <Title position={position}>{description}</Title>
    </ComponentTitle>
    <ComponentValue position={position}>
      <Value>{value}</Value>
    </ComponentValue>
  </Component>
);

SummaryClosing.propTypes = {
  position: PropTypes.oneOf(['right', 'left']).isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SummaryClosing;
