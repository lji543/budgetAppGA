export const addToCart = item => {
  // return action
  return {
    type: 'ADD_ITEM', // type is required for all actions
    item
  }
}

export const removeFromCart = item => {
  return {
    type: 'REMOVE_ITEM', // type is required for all actions
    item
  }
}
