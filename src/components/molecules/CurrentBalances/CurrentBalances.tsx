import React from 'react';
import ReactLoading from 'react-loading';

import { BalanceTypes, CurrentBalanceTypes, TotalBalancesTypes } from '../../../enums/accounts/balance.enum';
import currency from '../../../utils/helpers/currency';
import { Balance, TotalBalances } from '../../../types/accounts/balance.type';

import { BalanceContainer } from '../../atoms';

import {
  Component,
  ComponentCurrent,
  Label,
  Body,
  Feedback,
  ComponentTotal,
  TotalComponent,
  TotalComponentHeader,
  TotalLabel,
  ComponentTotalBody,
  TextLabel,
  TotalValue,
} from './styles';

interface CurrentBalancesProps {
  accounts: Array<Balance>;
  investments: Array<Balance>;
  totalBalances: TotalBalances;
  isLoading: boolean;
}

const CurrentBalances = (props: CurrentBalancesProps): JSX.Element => {
  const { accounts, investments, totalBalances, isLoading } = props;

  const TOTAL_BALANCES_LABEL = {
    general: 'Geral',
    investments: 'Poupança Itaú',
  };

  return (
    <Component>
      <ComponentCurrent>
        <Label balanceType={BalanceTypes.CURRENT}>Saldo Atual</Label>
        <Body>
          {accounts.length && !isLoading ? (
            <>
              <BalanceContainer balances={accounts} type={CurrentBalanceTypes.ACCOUNT} />
              <BalanceContainer balances={investments} type={CurrentBalanceTypes.INVESTMENT} />
            </>
          ) : (
            <Feedback>
              {isLoading ? <ReactLoading type='bubbles' color='#fff' /> : 'Não há contas para exibir'}
            </Feedback>
          )}
        </Body>
      </ComponentCurrent>
      <ComponentTotal>
        <Label balanceType={BalanceTypes.TOTAL}>Saldo Total</Label>
        <Body>
          {!isLoading ? (
            <>
              <TotalComponent key={TotalBalancesTypes.GENERAL} index={0} total={2} type={TotalBalancesTypes.GENERAL}>
                <TotalComponentHeader>
                  <TotalLabel>
                    <TextLabel>{TOTAL_BALANCES_LABEL.general}</TextLabel>
                  </TotalLabel>
                </TotalComponentHeader>
                <ComponentTotalBody>
                  <TotalValue>{currency.formatInReal(totalBalances.general.value)}</TotalValue>
                </ComponentTotalBody>
              </TotalComponent>
              <TotalComponent
                key={TotalBalancesTypes.INVESTMENTS}
                index={1}
                total={2}
                type={TotalBalancesTypes.INVESTMENTS}>
                <TotalComponentHeader>
                  <TotalLabel>
                    <TextLabel>{TOTAL_BALANCES_LABEL.investments}</TextLabel>
                  </TotalLabel>
                </TotalComponentHeader>
                <ComponentTotalBody>
                  <TotalValue>{currency.formatInReal(totalBalances.investments.value)}</TotalValue>
                </ComponentTotalBody>
              </TotalComponent>
            </>
          ) : (
            <Feedback>
              {isLoading ? <ReactLoading type='bubbles' color='#fff' /> : 'Não há totais para exibir'}
            </Feedback>
          )}
        </Body>
      </ComponentTotal>
    </Component>
  );
};

export default CurrentBalances;
