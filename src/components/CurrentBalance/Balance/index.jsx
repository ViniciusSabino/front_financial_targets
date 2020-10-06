import React from 'react';

import helper from './helper.js';

import { 
  Component, 
  Header,
  Type,
  Value,
} from './styles';

const Balance = ({ id, name, type, value }) => {

  return (
    <Component key={id}>
      <Header>
        {name}
        <Type>
          {helper.getBalanceType(type)}
        </Type>
      </Header>
      <Value>
        {`R$ ${value}`}
      </Value> 
    </Component> 
  )
}

export default Balance;
