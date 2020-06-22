import React from 'react';
import {Transactions, TransactionsList, Transaction} from './styles';

const IncomeList = () => {
  return (
    <Transactions>
      <h2>Transaction history</h2>

      <TransactionsList>
        <Transaction>
          <h4>Salary</h4>
          <span>R$ 500,00</span>
          <button>
            <i className="fas fa-trash"></i>
          </button>
        </Transaction>
      </TransactionsList>
    </Transactions>
  );
}

export default IncomeList;