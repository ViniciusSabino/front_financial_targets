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
  align-items: center;
  background-color: #637580;
  color: #ffffff;
  display: flex;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  height: 100%;
  justify-content: center;
  line-height: 78px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;

const LoadingContainer = styled.div`
  margin: auto;
  height: 60%;
  width: 10%;
  margin-bottom: 30px;
`;

export {
  Component, TitleContainer, Body, InfoContainer, LoadingContainer,
};
