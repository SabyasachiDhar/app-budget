// reducers/budgetReducer.js
import { ADD_NEW_TRANSACTION, EDIT_TRANSACTION, DELETE_TRANSACTION } from '../actions/actions';

const initialState = [
  {
    transactionDescription: "Salary for July",
    transactionType: "credit",
    transactionAction: "Income",
    transactionDate: "2023-07-01",
    transactionValue: 50000,
    transactionId: "txn001"
  },
  // ... other initial transactions
];

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TRANSACTION:
      return [action.payload, ...state];
    case EDIT_TRANSACTION:
      return state.map(item =>
        item.transactionId === action.payload.transactionId ? action.payload : item
      );
    case DELETE_TRANSACTION:
      return state.filter(item => item.transactionId !== action.payload);
    default:
      return state;
  }
};

export default budgetReducer;
