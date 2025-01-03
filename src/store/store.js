import { createStore } from 'redux';
import budgetReducer from '../reducers/budgetReducer';

const store = createStore(budgetReducer);

export default store;
