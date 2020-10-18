import styled from 'styled-components';

const Component = styled.table`
  background-color: #F5F5F5;
  padding: 7px;
  width: 100%;
`;

const Head = styled.thead` 
  tr th {
    padding: 10px;
    background-color: #10C9AF;
  }
`;

const Body = styled.tbody` 
  tr td {
    padding: 10px;
    background-color: #DCDCDC;
    text-align: start;
  }
`;

const Footer = styled.tbody` 
  tr td {
    padding: 10px;
    background-color: #909090;
    text-align: start;
    font-weight: bold;
  }
`;

export {
  Component,
  Head,
  Body,
  Footer,
};
