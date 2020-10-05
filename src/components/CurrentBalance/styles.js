import styled from 'styled-components';

const Component = styled.div`
  height: 140px;
  width: 100%;
`;

const ComponentTitle = styled.div`
  background-color: #10C9AF;
  display: inline-block;  
  height: 100%;
  line-height: 140px;
  text-align: center;
  width: 14%;
`;

const Title = styled.h1`
  color: #FFF;
  font-size: 25px;
  font-family: 'Lucida Grande';
  text-transform: uppercase; 
`;

const Balances = styled.div`
  float: right;
  height: 100%;
  width: 86%;
`;

const Balance = styled.div`
  background-color: #DADADA;
  border-left: 1px solid gray;
  display: inline-block;
  height: 100% ;
  width: 25%;
`;

const HeaderBalance = styled.div`
  align-items: center;
  background-color: #10C9AF;
  color: #FFF;
  display: flex;
  font-family: 'Lucida Grande';
  font-weight: bold;
  height: 25%;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
`;

const BalanceType = styled.span`
  background-color: #FFF;
  border-radius: 12px;
  color: #10C9AF;
  font-size: 9px;
  font-family: 'Lucida Grande';
  margin-left: 12px;
  padding: 7px;
  text-transform: uppercase; 
`;

const BalanceValue = styled.div`
  align-items: center;
  color: #10C9AF;
  display: flex;
  font-size: 20px;
  font-family: 'Lucida Grande';
  height: 75%;
  justify-content: center;
  text-transform: uppercase; 
`;

export { 
  Component, 
  ComponentTitle, 
  Title, 
  Balances,
  Balance, 
  HeaderBalance,
  BalanceType,
  BalanceValue,
}
