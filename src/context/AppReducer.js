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

    default:
      return state;
  }
}