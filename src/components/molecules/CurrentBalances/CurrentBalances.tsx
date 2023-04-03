import React from 'react';

import { Balance, TotalBalances } from '../../../services/accounts/mapper';
import { BalanceTypes, CurrentBalanceTypes, TotalBalancesTypes } from '../../../utils/enums/accounts.enum';
import currency from '../../../utils/helpers/currency';

import { Loading, DisplayBalanceContainer } from '../../atoms';

import {
  Component, ComponentCurrent, Label, Body, Feedback, ComponentTotal, DisplayTotal, DisplayHeader, NameHeader, DisplayBody,
  TextName,
  TextValue,
} from './styles';

export interface CurrentBalancesProps {
  currentBalances: Array<Balance>;
  totalBalances: TotalBalances;
  isLoading: boolean;
}

const CurrentBalances = (props: CurrentBalancesProps): JSX.Element => {
  const { currentBalances, totalBalances, isLoading } = props;

  const accounts = currentBalances.filter((balance) => balance.type === CurrentBalanceTypes.ACCOUNT);
  const investments = currentBalances.filter((balance) => balance.type === CurrentBalanceTypes.INVESTMENT);

  const TOTAL_BALANCES_LABEL = {
    general: 'Geral',
    investments: 'Poupança Itaú',
  };

  return (
    <Component>
      <ComponentCurrent>
        <Label balanceType={BalanceTypes.CURRENT}>Saldo Atual</Label>
        <Body>
          {accounts.length && !isLoading
            ? (
              <>
                <DisplayBalanceContainer
                  balances={accounts}
                  type={CurrentBalanceTypes.ACCOUNT}
                />
                <DisplayBalanceContainer
                  balances={investments}
                  type={CurrentBalanceTypes.INVESTMENT}
                />
              </>
            )
            : (
              <Feedback>
                {isLoading
                  ? (
                    <Loading type="bubbles" />
                  ) : 'Não há contas para exibir' }
              </Feedback>
            )}
        </Body>
      </ComponentCurrent>
      <ComponentTotal>
        <Label balanceType={BalanceTypes.TOTAL}>Saldo Total</Label>
        <Body>
          {!isLoading ? (
            <>
              <DisplayTotal key={TotalBalancesTypes.GENERAL} index={0} total={2} type={TotalBalancesTypes.GENERAL}>
                <DisplayHeader>
                  <NameHeader>
                    <TextName>{TOTAL_BALANCES_LABEL.general}</TextName>
                  </NameHeader>
                </DisplayHeader>
                <DisplayBody>
                  <TextValue>{currency.formatInReal(totalBalances.general.value)}</TextValue>
                </DisplayBody>
              </DisplayTotal>
              <DisplayTotal key={TotalBalancesTypes.INVESTMENTS} index={1} total={2} type={TotalBalancesTypes.INVESTMENTS}>
                <DisplayHeader>
                  <NameHeader>
                    <TextName>{TOTAL_BALANCES_LABEL.investments}</TextName>
                  </NameHeader>
                </DisplayHeader>
                <DisplayBody>
                  <TextValue>{currency.formatInReal(totalBalances.investments.value)}</TextValue>
                </DisplayBody>
              </DisplayTotal>
            </>
          )
            : (
              <Feedback>
                {isLoading
                  ? (
                    <Loading type="bubbles" />
                  ) : 'Não há totais para exibir' }
              </Feedback>
            )}
        </Body>
      </ComponentTotal>
    </Component>
  );
};

export default CurrentBalances;
