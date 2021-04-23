import styled from 'styled-components';

const Component = styled.table`
  background-color: #7A9CB5;
  border-collapse: collapse;
  width: 100%;
`;

const Head = styled.thead`
  background-color:#7A9CB5;
  font-size: 15px;
  text-align:left;
  text-transform: uppercase;
  border-bottom: 2px solid #FFFF;
`;

const Row = styled.tr`
  color: #fff;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const HeaderCell = styled.th`
  padding: 6px 6px 6px 10px;
`;

const Body = styled.tbody`

`;

const Cell = styled.td`
  background-color:#515E67;
  padding: 6px 6px 6px 10px;
  border-bottom: 1px solid #FFFF;
`;

export {
  Component, Head, Row, HeaderCell, Cell, Body,
};
