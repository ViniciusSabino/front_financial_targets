import styled from 'styled-components';

import { CurrentBalanceTypes } from '../../../utils/enums/balances';

interface BalancesComponentProps {
  type: CurrentBalanceTypes;
}

const Component = styled.div<BalancesComponentProps>`
 ${(props) => (props.type === CurrentBalanceTypes.ACCOUNT ? 'float: left;' : 'float: right;')}
  height: 100%;
  width: 50%;
`;

export { Component };
