import React from 'react';

import Header from '../../components/Header';
import CurrentBalance from '../../components/CurrentBalance';
import Goals from '../../components/Modules/Accounts/Goals';
import BillsToPay from '../../components/Modules/Accounts/BillsToPay';
import Division from '../../components/Division';

import { Module } from './styles';

const Accounts = () => (
  <>
    <Header title="Financial Targets" />
    <CurrentBalance />
    <Module>
      <Division title="Contas" />
      <Goals title="Metas" />
      <BillsToPay title="Minhas Contas" />
    </Module>
  </>
);

export default Accounts;
