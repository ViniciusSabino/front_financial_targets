import styled from 'styled-components';

const Component = styled.div`
  height: 50%;
`;

const Header = styled.div`
  background-color: #7A9CB5;
  height: 30px;
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
  background-color: #515E67;
  height: 100%;
`;

export {
  Component, Header, Subtitle, Body,
};
