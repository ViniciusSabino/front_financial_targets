import styled from 'styled-components';

const Component = styled.div`
  height: 800px;
  margin: auto;
  padding-top: 50px;
  width: 90%;
`;

const Header = styled.div`
  background-color: #637580;
  height: 10%;
`;

const Title = styled.h1`
  color: #FFFF;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 18px;
  line-height: 55px;
  text-align: center;
  text-transform: uppercase;
`;

const Body = styled.div`
  height: 85%;
`;

const Footer = styled.div`
  background-color: #637580;
  height: 5%;
`;

export {
  Component, Header, Title, Body, Footer,
};
