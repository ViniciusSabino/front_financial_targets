import React from 'react';

import {
  Module
} from './styles';

import Control from '../../components/Control/index.jsx';
import BillsToPay from '../../components/BillsToPay/index.jsx';
import Division from '../../components/Division/index.jsx';

const Accounts = () => {
  return (
    <Module>
        <Control title='Controle' /> 
        <BillsToPay title='Minhas Contas' />
        <Division title='Resumo' />
    </Module>
  )
}

export default Accounts
