import styled from 'styled-components';

const Page = styled.div`
  background-color: #BEBEBE;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Component = styled.div`
  height: 370px;
  margin: auto;
  width: 60%;
`;

const CardTitle = styled.div`
  align-items: center; 
  background-color: #10C9AF;
  display: inline-flexbox;
  height: 100%;
  justify-content: center;
  width: 50%;
`;

const Title = styled.h1`
  color: #FFF;
  font-size: 40px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-transform: uppercase;
`;

const CardLogin = styled.div`
  background-color: #1260A9;
  display: flex;
  float: right;
  height: 100%;
  width: 50%;
`;

export {
  Page,
  Component,
  CardTitle,
  CardLogin,
  Title,
};
