import React from 'react';

import Table from '../Table/index.jsx'

import {
  Component,
  Header,
  Body,
} from './styles';

const tableData = [
  {
    description: 'Meta de Longo Prazo',
    suggestedValue: 21.00,
    customizedValue: 30.10,
    amountPaid: 50.00,
    remainingAmount: 10.00
  },
  {
    description: 'Meta de Curto Prazo',
    suggestedValue: 51.00,
    customizedValue: 80.10,
    amountPaid: 55.00,
    remainingAmount: 9.00
  }
]

const header = {
  description: 'Descrição',
  suggestedValue: 'Valor Sugerido',
  customizedValue: 'Valor Customizado',
  amountPaid: 'Valor Pago',
  remainingAmount: 'Valor Restante'
}

const Control = ({ title }) => {

  return (
    <Component>
      <Header>{title}</Header>
      <Body>
        <Table header={header} data={tableData} total />
      </Body>
    </Component>
  )
}

export default Control
