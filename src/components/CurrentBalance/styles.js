import styled from 'styled-components';

const Component = styled.div`
  height: 115px;
  width: 100%;
`;

const ComponentTitle = styled.div`
  background-color: #B3CBC7;
  display: inline-block;  
  height: 100%;
  line-height: 115px;
  text-align: center;
  width: 14%;
`;

const Title = styled.h1`
  color: #FFF;
  font-size: 20px;
  font-family: 'Lucida Grande';
  text-transform: uppercase; 
`;

const Balances = styled.div`
  float: right;
  height: 100%;
  width: 86%;
`;

export {
  Component,
  ComponentTitle,
  Title,
  Balances,
};
