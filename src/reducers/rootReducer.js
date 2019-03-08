import { combineReducers } from 'redux';

import profile from './profileReducer';
import expenses from './expensesReducer';

const rootReducer = combineReducers({
  profile,
  expenses
});

export default rootReducer;
