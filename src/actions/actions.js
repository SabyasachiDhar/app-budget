// actions.js
export const ADD_NEW_TRANSACTION = 'ADD_NEW_TRANSACTION';
export const EDIT_TRANSACTION = 'EDIT_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';

export const addNewTransaction = (transaction) => ({
  type: ADD_NEW_TRANSACTION,
  payload: transaction
});

export const editTransaction = (transaction) => ({
  type: EDIT_TRANSACTION,
  payload: transaction
});

export const deleteTransaction = (transactionId) => ({
  type: DELETE_TRANSACTION,
  payload: transactionId
});
