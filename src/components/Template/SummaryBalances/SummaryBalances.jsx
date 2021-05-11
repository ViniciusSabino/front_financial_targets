import React from 'react';
import PropTypes from 'prop-types';

import { CurrentBalance, SummaryClosing } from './childrens';
import { CURRENT_BALANCE, TYPES_OF_BALANCES } from './constants';

import { Component, CurrentBalances, SummarizedClosings } from './styles';

const SummaryBalances = ({ currentBalances, totalBalances, closings }) => {
  const balances = [];

  if (currentBalances) balances.push(currentBalances);
  if (totalBalances) balances.push(totalBalances);

  return (
    <Component>
      <CurrentBalances>
        {balances.map((group) => (
          <CurrentBalance
            key={group.title}
            title={group.title}
            type={group.type}
            balances={group.balances}
          />
        ))}
      </CurrentBalances>

      <SummarizedClosings>
        {closings.map((closing, index) => (
          <SummaryClosing
            key={closing.description}
            position={index % 2 ? 'left' : 'right'}
            description={closing.description}
            value={closing.value}
          />
        ))}
      </SummarizedClosings>
    </Component>
  );
};

SummaryBalances.propTypes = {
  currentBalances: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf([TYPES_OF_BALANCES.CURRENT]).isRequired,
    balances: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf([CURRENT_BALANCE.TYPES.ACCOUNT, CURRENT_BALANCE.TYPES.INVESTMENT]).isRequired,
      value: PropTypes.number.isRequired,
      index: PropTypes.number.isRequired,
    })),
  }),

  totalBalances: PropTypes.shape({
    title: PropTypes.string,
    position: PropTypes.oneOf([TYPES_OF_BALANCES.TOTAL]),
    balances: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      index: PropTypes.number.isRequired,
    })),
  }),

  closings: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

SummaryBalances.defaultProps = {
  currentBalances: null,
  totalBalances: null,
  closings: [],
};

export default SummaryBalances;
