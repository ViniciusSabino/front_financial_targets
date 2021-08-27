import styled from 'styled-components';

const Component = styled.div`
  margin: auto;
  width: 75%;
`;

const Form = styled.form`
  width: 100%;
`;

const Link = styled.a`
  color: #79AEA5;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 16px;
  text-decoration: none;
  padding-bottom: 15px;
  padding-top: 5px;
  float: right; 

  :hover {
    color: #7EBFB4;
  }
`;

const Actions = styled.div`
  padding-top: 10px;
  width: 100%;

  button {
    width: 250px;
    margin-left: 10%;
  }
`;

const Error = styled.p`
  color: #E9BFBF;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 15px;
`;

export {
  Component,
  Form,
  Link,
  Actions,
  Error,
};
