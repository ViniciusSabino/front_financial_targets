import styled from 'styled-components';

const Component = styled.div`
  align-items: center;
  display: flex;
  height: 80%;
  margin: auto;
  width: 75%;
`;

const Form = styled.form`
  width: 100%;
`;

const Link = styled.a`
  color: #10C9AF;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 15px;
  text-decoration: none;
  padding-bottom: 10px;
  float: right; 
`;

const LoginActions = styled.div`
  padding-top: 10px;
  width: 100%;

  button {
    width: 250px;
    margin-left: 10%;
  }
`;

export {
  Component,
  Form,
  Link,
  LoginActions,
};
