import styled from 'styled-components';

const Component = styled.div`
  background-color: #143736;
  height: 100%;
  width: 100%;
`;

const TitleContainer = styled.div`
  background-color: #143736;
  color: #ffffff;
  height: 100%;
  float: right;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
  line-height: 78px;
  text-align: center;
  text-transform: uppercase;
  width: 30%;
`;

const Body = styled.div`
  float: right;
  height: 100%;
  width: 70%;
`;

export { Component, TitleContainer, Body };
