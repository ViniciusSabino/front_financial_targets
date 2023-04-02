import styled from 'styled-components';

import { CurrentBalanceTypes, TotalBalancesTypes } from '../../../utils/enums/balances';

interface BalanceComponentProps {
  index: number;
  total: number;
  type: CurrentBalanceTypes | TotalBalancesTypes;
}

interface NameAreaProps {
  hasIteration: boolean;
}

const Component = styled.div<BalanceComponentProps>`
  ${(props) => (props.type === CurrentBalanceTypes.ACCOUNT || props.type === TotalBalancesTypes.GENERAL)
    && 'border-right: 1px solid #143736;'}
  height: 100%;
  ${(props) => (props.type === TotalBalancesTypes.INVESTMENTS || props.type === TotalBalancesTypes.GENERAL
    ? 'width: 50%;'
    : 'width: 100%')}
  ${(props) => (props.type === TotalBalancesTypes.GENERAL ? 'float: left;' : '')}
  ${(props) => (props.type === TotalBalancesTypes.INVESTMENTS ? 'float: right;' : '')}
`;

const Header = styled.div`
  background-color: #143736;
  height: 40%;
  width: 100%;
  padding: 5px 0px 0px 0px;
`;

const NameArea = styled.div<NameAreaProps>`
  float: left;
  height: 100%;
  ${(props) => (props.hasIteration ? 'width: 50%;' : 'width: 100%;')}
`;

const PreviousBalance = styled.div`
  color: #fff;
  float: left;
  font-size: 18px;
  height: 100%;
  line-height: 30px;
  text-align: center;
  width: 25%;
`;

const Name = styled.h1`
  color: #fff;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 27.3px;
  text-align: center;
  text-transform: uppercase;
`;

const NextBalance = styled(PreviousBalance)`
  float: right;
`;

const Body = styled.div`
  background-color: #143736;
  height: 60%;
`;

const Value = styled(Name)`
  font-size: 18px;
  line-height: 50.7px;
`;

export {
  Component, Header, NameArea, Name, Body, PreviousBalance, Value, NextBalance,
};
