import React from 'react';

import {
  Component
} from './styles';

import Control from '../../components/Control/index.jsx';
import BillsToPay from '../../components/BillsToPay/index.jsx';

const Accounts = () => {
  return (
    <Component>
        <Control title='Controle' /> 
        <BillsToPay title='Minhas Contas' />
    </Component>
  )
}

export default Accounts
