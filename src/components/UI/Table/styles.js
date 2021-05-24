import styled from 'styled-components';

const Component = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Head = styled.thead`
  background-color:#515E67;
  font-size: 15px;
  text-align:left;
  text-transform: uppercase; 
`;

const Row = styled.tr`
  color: #515E67;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const HeaderCell = styled.th`
  color: #FFF;
  padding: 6px 6px 6px 10px;
`;

const Body = styled.tbody`

`;

const Cell = styled.td`
  background-color:#E7E7E7;
  padding: 6px 6px 6px 10px;
  border-bottom: 1px solid #515E67;
`;

export {
  Component, Head, Row, HeaderCell, Cell, Body,
};
