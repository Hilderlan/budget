import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import {Transactions, TransactionsList, Transaction} from './styles';

const IncomeList = () => {
  const {expenseTransactions, deleteTransaction} = useContext(GlobalContext);

  return (
    <Transactions>
      <h2>Transaction history</h2>

      <TransactionsList>
        {expenseTransactions.map(transaction => (
          <Transaction key={transaction.id}>
            <h4>{transaction.text}</h4>
              <span>R$ {transaction.amount}</span>
            <button onClick={() => deleteTransaction(transaction.id)} >
              <i className="fas fa-trash"></i>
            </button>
          </Transaction>
        ))}
      </TransactionsList>
    </Transactions>
  );
}

export default IncomeList;