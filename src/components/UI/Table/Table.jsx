/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Component,
  Head,
  Row,
  HeaderCell,
  Body,
  Cell,
  LinkAction,
} from './styles';

import { mountAction } from './helpers';

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
              {actions.length && (
              <Cell isAction>
                {actions.map((action) => (
                  <LinkAction key={action.name} onClick={action.event} actionName={action.name}>
                    {mountAction(action.name)}
                  </LinkAction>
                ))}
              </Cell>
              ) }
            </Row>
          ))}
        </Body>
      </Component>
    )
    : <></>
);

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  actions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    event: PropTypes.func.isRequired,
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
