import React from 'react';
import { Link } from 'react-router-dom';

import { IDateInfoState } from '../../../slices/dateInfoSlice';

import { CurrentBalancesContainer, SummaryEntriesContainer } from '../../molecules';

import { Component, Header } from './styles';

interface IBalancePanelProps {
  dateInfo: IDateInfoState;
  currentModule: string;
  currentRoute: string;
}

const BalancePanel = (props: IBalancePanelProps): JSX.Element => {
  const { dateInfo, currentModule, currentRoute } = props;

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Component>
      <Header>
        <Link to={{ pathname: currentRoute }} onClick={refreshPage}>
          {currentModule}
        </Link>{' '}
        / {dateInfo.currentMonth.name} de {dateInfo.currentYear}
      </Header>
      <CurrentBalancesContainer />
      <SummaryEntriesContainer />
    </Component>
  );
};

export default BalancePanel;
