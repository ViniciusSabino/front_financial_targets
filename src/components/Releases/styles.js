import styled from 'styled-components';

const Component = styled.div`
  height: 850px;
  margin: auto;
  padding-top: 50px;
  width: 90%;
`;

const Body = styled.div`
  height: 85%;
`;

const Footer = styled.div`
  background-color: #637580;
  height: 8%;
`;

const TotalReleases = styled.p`
  color: #FFF;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  line-height: 68px;
  text-align: center;
  text-transform: uppercase;
`;

const TotalReleasesValue = styled.a` 
  color: #FFF;
  background-color: #79AEA5;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  padding:7px;
`;

export {
  Component,
  Body,
  Footer,
  TotalReleases,
  TotalReleasesValue,
};
