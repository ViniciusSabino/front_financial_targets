import styled from 'styled-components';

const Component = styled.div`
  background-color: #79AEA5;
  height: 70px;
  width: 100%;
`;

const SummaryTitleComponent = styled.div`
  background-color: #79AEA5;
  float: ${(props) => (props.position)};
  height: 100%;
  text-align: center;
  width: 14%;
`;

const SummaryTitle = styled.p`
  color: #FFF;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 18px;
  line-height: 74px;
  position: relative;
  text-transform: uppercase; 
`;

const Balance = styled.div`
  background-color: #637580;
  float: ${(props) => (props.position)};
  height: 100%;
  text-align: center;
  width: 16.7%;

  ${(props) => props.bordered
    && `
       border-${props.position}:1px #E7E7E7 solid;
    `};
`;

const BalanceHeader = styled.div`
  height: 35%;
  width: 100%;
`;

const BalanceName = styled.p`
  color: #FFFF;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 12px;
  line-height: 25px;
  text-transform: uppercase;
`;

const BalanceBody = styled.div`
  height: 65%;
  width: 100%;
`;

const BalanceValue = styled.p`
  color: #FFFF;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 20px;
  line-height: 35px;
  text-transform: uppercase;
`;

export {
  Component,
  SummaryTitleComponent,
  SummaryTitle,
  Balance,
  BalanceHeader,
  BalanceName,
  BalanceBody,
  BalanceValue,
};
