import React from 'react';
import PropTypes from 'prop-types';

import {
  Component,
  ComponentTitle,
  Title,
  Balance,
  Header,
  BalanceName,
  Body,
  BalanceValue,
} from './styles';

const CurrentBalance = ({ title, position, balances }) => (
  <Component position={position}>
    <ComponentTitle position={position}>
      <Title>{title}</Title>
    </ComponentTitle>
    {balances.map((balance) => (
      <Balance
        key={balance.name}
        position={balance.position}
        bordered={balance.bordered}
      >
        <Header>
          <BalanceName>{balance.name}</BalanceName>
        </Header>
        <Body>
          <BalanceValue>{balance.value}</BalanceValue>
        </Body>
      </Balance>
    ))}
  </Component>
);

CurrentBalance.propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['right', 'left']).isRequired,
  balances: PropTypes.arrayOf(PropTypes.shape({
    position: PropTypes.oneOf(['right', 'left']).isRequired,
    bordered: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

CurrentBalance.defaultProps = {
  balances: [],
};

export default CurrentBalance;
