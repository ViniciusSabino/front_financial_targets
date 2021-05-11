import React from 'react';
import PropTypes from 'prop-types';

import { CURRENT_BALANCE, TYPES_OF_BALANCES } from '../../constants';
import { getBalanceGroupPosition, mountBalanceTitle, shouldPutBorderBalance } from './helpers';

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

const CurrentBalance = ({ title, type, balances }) => {
  const POSITION = getBalanceGroupPosition(type);

  return (
    <Component position={POSITION}>
      <ComponentTitle position={POSITION}>
        <Title>{title}</Title>
      </ComponentTitle>

      {balances.map((balance) => (
        <Balance
          key={balance.id}
          position={POSITION}
          bordered={shouldPutBorderBalance(balance.index)}
        >
          <Header>
            <BalanceName>{mountBalanceTitle(balance, type)}</BalanceName>
          </Header>
          <Body>
            <BalanceValue>{balance.value}</BalanceValue>
          </Body>
        </Balance>
      ))}
    </Component>
  );
};

CurrentBalance.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf([TYPES_OF_BALANCES.CURRENT, TYPES_OF_BALANCES.TOTAL]).isRequired,
  balances: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([CURRENT_BALANCE.TYPES.ACCOUNT, CURRENT_BALANCE.TYPES.INVESTMENT]),
    value: PropTypes.number.isRequired,
    isMain: PropTypes.bool,
    index: PropTypes.number.isRequired,
  })),
};

CurrentBalance.defaultProps = {
  balances: [],
};

export default CurrentBalance;
