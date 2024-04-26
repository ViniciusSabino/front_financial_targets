import styled from 'styled-components';

import { CurrentBalanceTypes, TotalBalancesTypes } from '../../../enums/accounts/balance.enum';

interface ComponentProps {
  type: CurrentBalanceTypes;
}

interface BalanceProps {
  index: number;
  total: number;
  type: CurrentBalanceTypes | TotalBalancesTypes;
}

const Component = styled.div<ComponentProps>`
  ${(props) => (props.type === CurrentBalanceTypes.ACCOUNT ? 'float: left;' : 'float: right;')}
  height: 100%;
  width: 50%;
`;

const BalanceComponent = styled.div<BalanceProps>`
  ${(props) => props.type === CurrentBalanceTypes.ACCOUNT && 'border-right: 1px solid #143736;'}
  height: 100%;
  width: 100%;
  float: left;
`;

const Header = styled.div`
  height: 40%;
  width: 100%;
`;

const NameHeader = styled.div`
  float: left;
  height: 100%;
  width: 50%;
`;

const Previous = styled.div`
  color: #fff;
  float: left;
  font-size: 20px;
  font-weight: bold;
  height: 100%;
  line-height: 30px;
  text-align: center;
  width: 25%;

  :hover {
    color: #cacaca;
    font-size: 22px;
    line-height: 28px;
  }
`;

const TextName = styled.h1`
  color: #fff;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 35px;
  text-align: center;
  text-transform: uppercase;
`;

const Next = styled(Previous)`
  float: right;
`;

const Body = styled.div`
  background-color: #233c4a;
  height: 60%;
`;

const TextValue = styled(TextName)`
  font-size: 18px;
  line-height: 50.7px;
`;

export {
  Component, BalanceComponent, Header, NameHeader, Previous, TextName, Next, Body, TextValue,
};
