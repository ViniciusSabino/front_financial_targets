import React from 'react';
import PropTypes from 'prop-types';

import {
  Component,
  Head,
  Body,
  Footer,
} from './styles';

const Table = ({ header, items, total }) => (
  <Component>
    <Head>
      <tr>
        {header.map((item) => <th key={item}>{item}</th>)}
      </tr>
    </Head>
    <Body>
      {items.map((item) => (
        <tr>
          {Object.keys(item).map((key) => <td key={key}>{item[key]}</td>)}
        </tr>
      ))}
    </Body>
    <Footer>
      <tr>
        <td>Total</td>
        {Object.keys(total).map((key) => <td key={key}>{total[key]}</td>)}
      </tr>
    </Footer>
  </Component>
);

Table.propTypes = {
  header: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Table;
