import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const INITIAL_STATE = {
  incomeTransactions: [
    {id: 1, text: 'Test', amount: 1500}
  ],
  expenseTransactions: [
    {id: 1, text: 'Test2', amount: 500}
  ],
};

export const GlobalContext = createContext(INITIAL_STATE);

export const GlobalContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  const addIncome = (income) => {
    dispatch({
      type: 'ADD_INCOME',
      payload: income
    })
  }

  const addExpense = (expense) => {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    })
  }

  const deleteTransaction = id => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  return(
    <GlobalContext.Provider value={{
      incomeTransactions: state.incomeTransactions,
      expenseTransactions: state.expenseTransactions,
      addIncome,
      addExpense,
      deleteTransaction
    }
    } >
      {children}
    </GlobalContext.Provider>
  )
}