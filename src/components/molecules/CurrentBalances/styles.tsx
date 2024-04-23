import styled from 'styled-components';
import { BalanceTypes, CurrentBalanceTypes, TotalBalancesTypes } from '../../../enums/accounts/balance.enum';

interface LabelProps {
  balanceType: BalanceTypes;
}

interface TotalComponentProps {
  index: number;
  total: number;
  type: CurrentBalanceTypes | TotalBalancesTypes;
}

const Component = styled.div`
  background-color: #264654;
  height: 78px;
  width: 100%;
`;

const ComponentCurrent = styled.div`
  float: left;
  height: 100%;
  width: 47%;
`;

const ComponentTotal = styled(ComponentCurrent)`
  float: right;
`;

const Label = styled.div<LabelProps>`
  background-color: #233c4a;
  color: #ffffff;
  height: 100%;
  ${(props) => (props.balanceType === BalanceTypes.CURRENT ? 'float: left;' : 'float: right')};
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

const Feedback = styled.div`
  align-items: center;
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

const TotalComponent = styled.div<TotalComponentProps>`
  ${(props) => props.type === TotalBalancesTypes.GENERAL && 'border-right: 1px solid #143736;'}
  height: 100%;
  ${(props) =>
    props.type === TotalBalancesTypes.INVESTMENTS || props.type === TotalBalancesTypes.GENERAL
      ? 'width: 50%;'
      : 'width: 100%'}
  ${(props) => (props.type === TotalBalancesTypes.GENERAL ? 'float: left;' : '')}
  ${(props) => (props.type === TotalBalancesTypes.INVESTMENTS ? 'float: right;' : '')}
`;

const TotalComponentHeader = styled.div`
  height: 40%;
  width: 100%;
  padding: 5px 0px 0px 0px;
`;

const TotalLabel = styled.div`
  float: left;
  height: 100%;
  width: 100%;
`;

const TextLabel = styled.h1`
  color: #ffffff;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 27.3px;
  text-align: center;
  text-transform: uppercase;
`;

const ComponentTotalBody = styled.div`
  background-color: #233c4a;
  height: 60%;
`;

const TotalValue = styled(TextLabel)`
  font-size: 18px;
  line-height: 50.7px;
`;

export {
  Component,
  ComponentCurrent,
  ComponentTotal,
  Label,
  Body,
  Feedback,
  TotalComponent,
  TotalComponentHeader,
  TotalLabel,
  TextLabel,
  ComponentTotalBody,
  TotalValue,
};
