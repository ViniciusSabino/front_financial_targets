import React from 'react';

import {
  Component,
  Head,
  Row,
  HeaderCell,
  Body,
  Cell,
} from './styles';

const help = {
  EDIT: 'Editar',
  DELETE: 'Excluir',
};

const data = {
  cells: [
    {
      name: 'Salário Dextra',
      type: 'Salário',
      date: '10/10/2010',
      value: 'R$ 10.000,00',
      recurrence: 'Mensal',
      account: 'Principal',
    },
    {
      name: 'Adiantamento Dextra',
      type: 'Salário',
      date: '10/10/2010',
      value: 'R$ 10.000,00',
      recurrence: 'Mensal',
      account: 'Principal',
    },
  ],
  actions: ['EDIT', 'DELETE'],
  headers: ['Nome', 'Tipo', 'Data', 'Valor', 'Se Repete', 'Conta'],
};

const action = (actions) => actions.reduce((acc, item) => `${acc}| ${help[item]}`, '');

const Table = () => (
  data.headers.length
    ? (
      <Component>
        <Head>
          <Row>
            {data.headers.map((value) => <HeaderCell>{value}</HeaderCell>)}
            {data.actions.length && <HeaderCell>Ações</HeaderCell> }
          </Row>
        </Head>
        <Body>
          {data.cells.map((cell) => (
            <Row>
              {Object.values(cell).map((value) => <Cell>{value}</Cell>)}
              {data.actions.length && <Cell>{action(data.actions)}</Cell> }
            </Row>
          ))}
        </Body>
      </Component>
    )
    : <></>);

export default Table;
