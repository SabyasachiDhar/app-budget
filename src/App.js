import React, { useState } from 'react';
import { Button, Container, Icon, Modal } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayHistory from './components/DisplayHistory';
import DisplayBalances from './components/DisplayBalances';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTransaction, editTransaction, deleteTransaction } from './actions/actions';

function App() {
  const historyData = useSelector(state => state);
  const dispatch = useDispatch();

  const [editItem, setEditItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleOk = (data) => {
    if (editItem) {
      const updatedTransaction = {
        ...editItem,
        transactionDescription: data.description,
        transactionType: data.isIncome ? 'credit' : 'debit',
        transactionAction: data.isIncome ? 'Income' : 'Expense',
        transactionDate: new Date().toISOString().split('T')[0],
        transactionValue: data.value
      };
      dispatch(editTransaction(updatedTransaction));
      setEditItem(null);
    } else {
      const newTransaction = {
        transactionId: uuidv4(),
        transactionDescription: data.description,
        transactionType: data.isIncome ? 'credit' : 'debit',
        transactionAction: data.isIncome ? 'Income' : 'Expense',
        transactionDate: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
        transactionValue: data.value
      };
      dispatch(addNewTransaction(newTransaction));
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setItemToDelete(id);
    setIsConfirmModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteTransaction(itemToDelete));
    setIsConfirmModalOpen(false);
    setItemToDelete(null);
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditItem(null);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
    setItemToDelete(null);
  };

  const budgetSummary = historyData.reduce((acc, transaction) => {
    if (transaction.transactionAction === 'Income') {
      acc.totalIncome += transaction.transactionValue;
    } else if (transaction.transactionAction === 'Expense') {
      acc.totalExpense += transaction.transactionValue;
    }
    acc.balance = acc.totalIncome - acc.totalExpense;
    return acc;
  }, { totalIncome: 0, totalExpense: 0, balance: 0 });

  const { totalIncome, totalExpense, balance } = budgetSummary;

  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance balanceLabel='Your Balance' balanceValue={balance} />
      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense} />
      <DisplayHistory dummyBudgetData={historyData} handleEdit={handleEdit} handleDelete={handleDelete} />
      <Modal open={isModalOpen} onClose={closeModal} size='small'>
        <Modal.Header>Edit Transaction</Modal.Header>
        <Modal.Content>
          <NewEntryForm handleOk={handleOk} editItem={editItem} closeModal={closeModal} />
        </Modal.Content>
      </Modal>
      <Modal open={isConfirmModalOpen} onClose={closeConfirmModal} size='mini'>
        <Modal.Header>Confirm Deletion</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete this transaction?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={confirmDelete}>
            <Icon name='trash' /> Delete
          </Button>
          <Button onClick={closeConfirmModal}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
      <NewEntryForm handleOk={handleOk} />
    </Container>
  );
}

export default App;