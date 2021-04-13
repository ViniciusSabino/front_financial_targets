import React from 'react';
import PropTypes from 'prop-types';

import CurrentBalance from './CurrentBalance/CurrentBalance';
import SummaryClosing from './SummaryClosing/SummaryClosing';

import {
  Component,
  CurrentBalances,
  SummarizedClosings,
} from './styles';

const SummaryBalances = ({ balancesGroup, closings }) => (
  <Component>
    <CurrentBalances>
      {balancesGroup.map((group) => (
        <CurrentBalance
          key={group.title}
          title={group.title}
          position={group.position}
          balances={group.balances}
        />
      ))}
    </CurrentBalances>
    <SummarizedClosings>
      {closings.map((closing, index) => (
        <SummaryClosing
          position={index % 2 ? 'left' : 'right'}
          description={closing.description}
          value={closing.value}
        />
      ))}
    </SummarizedClosings>
  </Component>
);

SummaryBalances.propTypes = {
  balancesGroup: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['right', 'left']).isRequired,
    balances: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.oneOf(['right', 'left']).isRequired,
      bordered: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })),
  })),

  closings: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

SummaryBalances.defaultProps = {
  balancesGroup: [],
  closings: [],
};

export default SummaryBalances;
