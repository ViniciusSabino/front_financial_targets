import styled from 'styled-components';

const Component = styled.div`
  height: 105px;
  width: 100%;
`;

const Header = styled.div`
  color: #233c4a;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  height: 35%;
  line-height: 37px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;

const ClosingsContainer = styled.div`
  height: 45%;
  width: 100%;
`;

const Current = styled.div`
  background-color: #233c4a;
  float: left;
  height: 100%;
  width: 47%;
`;

const Estimated = styled(Current)`
  float: right;
`;

const CurrentTitle = styled.div`
  border-right: 1px solid #fff;
  color: #fff;
  float: left;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 15px;
  font-weight: bold;
  height: 100%;
  line-height: 48px;
  text-align: center;
  text-transform: uppercase;
  width: 75%;
`;

const EstimatedTitle = styled(CurrentTitle)`
  border-left: 1px solid #fff;
  float: right;
`;

const CurrentValue = styled.div`
  color: #fff;
  float: left;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  height: 100%;
  line-height: 48px;
  text-align: center;
  text-transform: uppercase;
  width: 25%;
`;

const EstimatedValue = styled(CurrentValue)`
  float: right;
`;

const Footer = styled.footer`
  height: 20%;
`;

export {
  Component,
  Header,
  ClosingsContainer,
  Current,
  Estimated,
  CurrentTitle,
  EstimatedTitle,
  CurrentValue,
  EstimatedValue,
  Footer,
};
