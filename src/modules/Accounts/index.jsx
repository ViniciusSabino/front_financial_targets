import React from 'react';

import {
  Module,
} from './styles';

import Control from './components/Control';
import BillsToPay from './components/BillsToPay';
import Division from '../../components/Division';

const Accounts = () => (
  <Module>
    <Division title="Contas" />
    <Control title="Metas" />
    <BillsToPay title="Minhas Contas" />
  </Module>
);

export default Accounts;
