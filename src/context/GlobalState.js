import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';

const INITIAL_STATE = {
  incomeTransactions: JSON.parse(localStorage.getItem('incomeTransactions')) || [],
  expenseTransactions: JSON.parse(localStorage.getItem('expenseTransactions')) || [],
};

export const GlobalContext = createContext(INITIAL_STATE);

export const GlobalContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('incomeTransactions', JSON.stringify(state.incomeTransactions));
    localStorage.setItem('expenseTransactions', JSON.stringify(state.expenseTransactions));
  }, [state]);

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