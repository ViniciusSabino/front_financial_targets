import styled from 'styled-components';

const Component = styled.div`
  height: 100px;
  width: 100%;
`;

const ComponentTitle = styled.div`
  background-color: #1260A9;
  display: inline-block;  
  height: 100%;
  line-height: 100px;
  text-align: center;
  width: 14%;
`;

const Title = styled.h1`
  color: #FFF;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 20px;
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
