// reducers/rootReducer.js
import { combineReducers } from 'redux';
import budgetReducer from './budgetListReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  budget: budgetReducer,
  user: userReducer
});

export default rootReducer;
