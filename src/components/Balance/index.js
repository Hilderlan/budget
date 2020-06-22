import React from 'react';
import {BalanceWrapper, IncomeExpense, Plus, Minus} from './styles';

const Balance = () => {
  return (
    <BalanceWrapper>
      <h2>Your balance</h2>
      <h3>R$ 0,00</h3>

      <IncomeExpense>
        <Plus>
          <h3>Income</h3>
          <p>R$ 0,00</p>
        </Plus>

        <Minus>
          <h3>Expenses</h3>
          <p>R$ 0,00</p>
        </Minus>
      </IncomeExpense>
    </BalanceWrapper>
  );
}

export default Balance;