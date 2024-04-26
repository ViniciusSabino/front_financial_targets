import styled from 'styled-components';

const Component = styled.header`
  align-items: center;
  background-color: #054751;
  display: flex;
  height: 60px;
  justify-content: center;
  width: 100%;

  a {
    text-decoration: none;
  }
`;

const Title = styled.h1`
  color: #ffffff;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 24px;
  text-transform: uppercase;

  :hover {
    color: #ccc;
    font-size: 24.2px;
  }
`;

export default { Component, Title };
