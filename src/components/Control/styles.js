import styled from 'styled-components';

const Component = styled.div`
  background-color: #DADADA;
  display: inline-block;
  height: 400px;
  width: 50%;
`;

const Header = styled.div`
  align-items: center;
  background-color: #10C9AF;
  color: #FFF;
  display: flex;
  font-family: 'Lucida Grande';
  font-size: 16px;
  height: 11.25%;
  justify-content: center;
  width: 100%;
`;

const Body = styled.div`
  background-color: #FFF;
  height: 88.75%;
  width: 100%;
`;


export {
  Component,
  Header,
  Body
}
