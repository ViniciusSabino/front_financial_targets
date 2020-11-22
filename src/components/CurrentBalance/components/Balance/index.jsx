import React from 'react';
import PropTypes from 'prop-types';

import helper from './helper';

import {
  Component,
  Header,
  Type,
  Value,
  Title,
} from './styles';

const Balance = (props) => {
  const { name, type, value } = props;

  return (
    <Component>
      <Header>
        <Title>{name}</Title>
        <Type>
          {helper.getBalanceType(type)}
        </Type>
      </Header>
      <Value>
        {`R$ ${value}`}
      </Value>
    </Component>
  );
};

Balance.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Balance;
