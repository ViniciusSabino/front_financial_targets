import styled from 'styled-components';

const Component = styled.div`
  border-top: 1px solid #fff;
  height: 105px;
  width: 100%;
`;

const EntriesContainer = styled.div`
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

  :hover {
    background-color: #294758;
  }
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
  EntriesContainer,
  Current,
  Estimated,
  CurrentTitle,
  EstimatedTitle,
  CurrentValue,
  EstimatedValue,
  Footer,
};
