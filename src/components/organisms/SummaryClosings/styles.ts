import styled from 'styled-components';

const Component = styled.div`
  background-color: #79AEA5;
  height: 80px;
  width: 100%;
`;

const Header = styled.div`
  background-color: #7A9CB5;
  color: #FFF;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  height: 40%;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;

const ClosingsContainer = styled.div`
  height: 60%;
  width: 100.1%;
`;

const CurrentClosing = styled.div`
  background-color: #637580;
  float: left;
  height: 100%;
  width: 47%;
`;

const EstimatedClosing = styled(CurrentClosing)`
  float: right;
`;

const CurrentTitle = styled.div`
  border-right: 1px solid #FFF;
  color: #FFF;
  float: left;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  height: 100%;
  line-height: 48px;
  text-align: center;
  text-transform: uppercase;
  width: 75%;
`;

const EstimatedTitle = styled(CurrentTitle)`
  border-left: 1px solid #FFF;
  float: right;
`;

const CurrentValue = styled.div`
  color: #FFF;
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

export {
  Component,
  Header,
  ClosingsContainer,
  CurrentClosing,
  EstimatedClosing,
  CurrentTitle,
  EstimatedTitle,
  CurrentValue,
  EstimatedValue,
};
