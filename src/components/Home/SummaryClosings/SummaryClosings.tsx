import React from 'react';

import { SummarizedClosings } from './service';

import { Component } from './styles';

interface SummaryClosingsProps {
  closings: Array<SummarizedClosings>
}

const SummaryBalances = (props: SummaryClosingsProps): JSX.Element => {
  const { closings } = props;

  return (
    <Component />
  );
};

export default SummaryBalances;
