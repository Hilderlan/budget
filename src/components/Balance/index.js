import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import {BalanceWrapper, IncomeExpense, Plus, Minus} from './styles';

const Balance = () => {
  const {incomeTransactions, expenseTransactions} = useContext(GlobalContext);

  const incomeList = incomeTransactions.map(transaction => transaction.amount);
  const expenseList = expenseTransactions.map(transaction => transaction.amount);

  const incomeAmount = incomeList.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const expenseAmount = expenseList.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <BalanceWrapper>
      <h2>Your balance</h2>
      <h3>R$ {(incomeAmount - expenseAmount).toFixed(2)}</h3>

      <IncomeExpense>
        <Plus>
          <h3>Income</h3>
          <p>R$ {incomeAmount}</p>
        </Plus>

        <Minus>
          <h3>Expenses</h3>
          <p>R$ {expenseAmount}</p>
        </Minus>
      </IncomeExpense>
    </BalanceWrapper>
  );
}

export default Balance;