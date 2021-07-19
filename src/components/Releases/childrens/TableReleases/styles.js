import styled from 'styled-components';

const Component = styled.div`
  height: 50%;
  background-color: antiquewhite;
`;

const Header = styled.div`
  background-color: #7A9CB5;
  height: 10%;
`;

const Subtitle = styled.p`
  color: #FFFF;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 14px;
  line-height: 30px;
  margin-left: 10px;
  text-align: center;
  text-transform: uppercase;
`;

const Body = styled.div`
  height: 80%;
`;

const Footer = styled.div`
  background-color: #515E67;
  height: 10%;
`;

const TotalReleases = styled.p`
  color: #FFF;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 6px;
`;

export {
  Component,
  Header,
  Subtitle,
  Body,
  Footer,
  TotalReleases,
};
