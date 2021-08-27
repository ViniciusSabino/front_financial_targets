import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Component = styled.div`
  height: 370px;
  margin: auto;
  width: 60%;
`;

const ComponentTitle = styled.div`
  align-items: center; 
  background-color: #79AEA5;
  display: inline-flexbox;
  height: 100%;
  justify-content: center;
  width: 50%;
`;

const Title = styled.h1`
  color: #FFF;
  font-size: 40px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: center;
  text-transform: uppercase;
`;

const ComponentLogin = styled.div`
  background-color: #637580;
  display: flex;
  float: right;
  height: 100%;
  width: 50%;
`;

export {
  Page,
  Component,
  ComponentTitle,
  ComponentLogin,
  Title,
};
