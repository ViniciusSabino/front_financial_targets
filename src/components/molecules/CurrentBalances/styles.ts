import styled from 'styled-components';

const Component = styled.div`
  background-color: #79aea5;
  height: 100%;
  width: 100%;
`;

const TitleContainer = styled.div`
  background-color: #79aea5;
  color: #ffffff;
  height: 100%;
  float: left;
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

const InfoContainer = styled.div`
  color: #ffffff;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 78px;
  height: 100%;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;

export {
  Component, TitleContainer, Body, InfoContainer,
};
