export default (state, action) => {
  switch(action.type) {
    case 'ADD_INCOME':
      return {
        ...state,
        incomeTransactions: [...state.incomeTransactions, action.payload]
      }

    case 'ADD_EXPENSE':
      return {
        ...state,
        expenseTransactions: [...state.expenseTransactions, action.payload]
      }

    case 'DELETE_TRANSACTION':
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(transaction => (
          transaction.id !== action.payload
        )),
        expenseTransactions: state.expenseTransactions.filter(transaction => (
          transaction.id !== action.payload
        )),
      }

    default:
      return state;
  }
}