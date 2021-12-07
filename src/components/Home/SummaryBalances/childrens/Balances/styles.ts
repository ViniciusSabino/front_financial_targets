import styled from 'styled-components';

interface BalanceComponentProps {
  balanceIndex: number;
  balancesLength: number;
}

const Component = styled.div`
  height: 100%;
  width: 100%;
`;

const BalanceComponent = styled.div<BalanceComponentProps>`
  ${(props) => props.balanceIndex !== props.balancesLength && 'border-right: 1px solid #8d8d8d;'}
  float: left;
  height: 100%;
  width: 50%;
`;

const Header = styled.div`
  background-color: #637580;
  height: 35%;
  width: 100%;
`;

const BalanceName = styled.h1`
  color: #FFF;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 13px;
  font-weight: bold;
  line-height: 27.3px;
  text-align: center;
  text-transform: uppercase;
`;

const Body = styled.div`
  background-color: #637580;
  height: 65%;
`;

const BalanceValue = styled(BalanceName)`
  font-size: 20px;
  line-height: 50.7px;
`;

export {
  Component, BalanceComponent, Header, BalanceName, Body, BalanceValue,
};
