import styled from 'styled-components';

const Component = styled.div`
  background-color: #DADADA;
  display: inline-block;
  height: 400px;
  width: 50%;
`;

const Header = styled.div`
  align-items: center;
  background-color: #B3CBC7;
  color: #FFF;
  display: flex;
  font-family: 'Lucida Grande';
  font-size: 16px;
  height: 11%;
  justify-content: center;
  width: 100%;
`;

const Body = styled.div`
  background-color: #FFF;
  height: 88.75%;
  width: 100%;
  padding: 10px;
`;

export {
  Component,
  Header,
  Body,
};
