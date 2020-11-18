import styled from 'styled-components';

const Page = styled.div`
  align-items: center;
  background-color: #B3CBC7;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Component = styled.div`
  background-color: #299;
  height: 350px;
  margin: auto;
  width: 60%;
`;

const Logo = styled.div`
  align-items: center;
  background-color: #10C9AF;
  display: inline-flexbox;
  height: 100%;
  width: 50%;
`;

const LoginForm = styled.div`
  background-color: #909090;
  float: right;
  height: 100%;
  width: 50%;
`;

const Title = styled.div`
  color: #FFF;
  font-size: 20px;
  height: 40%;
  margin: auto;
  text-align: center;
  text-transform: uppercase;
  padding: 20px 0px;
  width: 70%;
`;

export {
  Page,
  Component,
  Logo,
  LoginForm,
  Title,
};
