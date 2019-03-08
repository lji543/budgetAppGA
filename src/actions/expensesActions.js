export const addExpense = expense => {
  return {
    type: 'ADD_EXPENSE',
    expense
  }
}

export const removeExpense = expense => {
  return {
    type: 'REMOVE_EXPENSE',
    expense
  }
}
