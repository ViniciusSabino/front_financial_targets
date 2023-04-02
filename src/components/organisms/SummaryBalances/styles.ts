import styled from 'styled-components';

const Component = styled.div`
  background-color: #0e2726;
  height: 78px;
  width: 100%;
`;

const CurrentBalancesContainer = styled.div`
  float: left;
  height: 100%;
  width: 47%;
`;

const TotalBalancesContainer = styled(CurrentBalancesContainer)`
  float: right;
`;

export { Component, CurrentBalancesContainer, TotalBalancesContainer };
