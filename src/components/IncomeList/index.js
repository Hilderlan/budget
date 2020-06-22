import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState'
import {Transactions, TransactionsList, Transaction} from './styles';

const IncomeList = () => {
  const {incomeTransactions} = useContext(GlobalContext);

  return (
    <Transactions income >
      <h2>Transaction history</h2>

      <TransactionsList>
        {incomeTransactions.map(transaction => (
          <Transaction income key={transaction.id}>
            <h4>{transaction.text}</h4>
            <span>R$ {transaction.amount}</span>
            <button>
              <i className="fas fa-trash"></i>
            </button>
          </Transaction>
        ))}
      </TransactionsList>
    </Transactions>
  );
}

export default IncomeList;