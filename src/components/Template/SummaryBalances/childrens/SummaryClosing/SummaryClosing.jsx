import React from 'react';
import PropTypes from 'prop-types';

import { TYPES_OF_CLOSINGS } from '../../constants';
import { mountDescription } from './helpers';

import {
  Component,
  ComponentTitle,
  Title,
  ComponentValue,
  Value,
} from './styles';

const SummaryClosing = ({
  month, position, type, value,
}) => {
  const description = mountDescription(month, type);

  return (
    <Component position={position}>
      <ComponentTitle position={position}>
        <Title position={position}>{description}</Title>
      </ComponentTitle>
      <ComponentValue position={position}>
        <Value>{value}</Value>
      </ComponentValue>
    </Component>
  );
};

SummaryClosing.propTypes = {
  month: PropTypes.number.isRequired,
  position: PropTypes.oneOf(['right', 'left']).isRequired,
  type: PropTypes.oneOf([
    TYPES_OF_CLOSINGS.ESTIMATED.name,
    TYPES_OF_CLOSINGS.CURRENT.name]).isRequired,
  value: PropTypes.number.isRequired,
};

export default SummaryClosing;
