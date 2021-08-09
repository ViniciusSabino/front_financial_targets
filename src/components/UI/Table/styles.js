import styled from 'styled-components';
import { TABLE_ACTIONS } from './constants';

const Component = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Head = styled.thead`
  background-color:#515E67;
  font-size: 15px;
  text-align:left;
  text-transform: uppercase; 
`;

const Row = styled.tr`
  color: #515E67;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const HeaderCell = styled.th`
  color: #FFF;
  padding: 6px 6px 6px 10px;
`;

const Body = styled.tbody`

`;

const Cell = styled.td`
  background-color: #F7F7F7;
  padding: 10px 6px 9px 10px;
  border-bottom: 1px solid #E8E8E8;

  ${(props) => props.isAction && `
 `}
`;

const LinkAction = styled.a`
  background-color: ${(props) => {
    if (props.actionName === TABLE_ACTIONS.DELETE) {
      return '#FF3333';
    }

    if (props.actionName === TABLE_ACTIONS.EDIT) {
      return '#79AEA5';
    }

    return '#79AEA5';
  }};

  border-radius: 2px;
  color: #FFF;
  font-size: 13px;
  font-weight: bold;
  margin: 5px;
  padding: 5px;
  text-transform: uppercase;

  :hover {
    background-color: ${(props) => {
    if (props.actionName === TABLE_ACTIONS.DELETE) {
      return '#FF4646';
    }

    if (props.actionName === TABLE_ACTIONS.EDIT) {
      return '#85C0B6';
    }

    return '#85C0B6';
  }};
  }
`;

export {
  Component,
  Head,
  Row,
  HeaderCell,
  Cell,
  Body,
  LinkAction,
};
