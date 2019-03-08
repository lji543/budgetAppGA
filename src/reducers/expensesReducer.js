export default (state = {}, action) => {

  // switch(action.type){
  //   case 'ADD_ITEM':
  //     let newState = {...state};
  //
  //     if (newState[action.item]) {
  //       newState[action.item] += 1;
  //     } else {
  //       newState[action.item] = 1;
  //     }
  //     return newState;
  //     case 'REMOVE_ITEM':
  //       let currentCart = {...state};
  //
  //       if (currentCart[action.item] > 1) {
  //         currentCart[action.item] -= 1;
  //       } else {
  //         delete currentCart[action.item];
  //       }
  //       return currentCart;
  //   default:
  //     return state;
  // }
  return state;
}
