/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import { TABLE_ALL_ACTIONS } from './constants';

import {
  Component,
  Head,
  Row,
  HeaderCell,
  Body,
  Cell,
} from './styles';

import { mountActions } from './helpers';

const Table = ({ headers, actions, data }) => (
  headers.length
    ? (
      <Component>
        <Head>
          <Row>
            {headers.map((value) => <HeaderCell key={value}>{value}</HeaderCell>)}
            {actions.length && <HeaderCell>Ações</HeaderCell> }
          </Row>
        </Head>
        <Body>
          {data.map((cell, index) => (
            <Row key={`row${index}`}>
              {Object.values(cell).map((value) => <Cell key={value}>{value}</Cell>)}
              {actions.length && <Cell>{mountActions(actions)}</Cell> }
            </Row>
          ))}
        </Body>
      </Component>
    )
    : <></>
);

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  actions: PropTypes.arrayOf(PropTypes.oneOf(TABLE_ALL_ACTIONS)).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
