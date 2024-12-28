import React, { useState } from 'react';
import { Button, Container, Icon, Modal } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayHistory from './components/DisplayHistory';
import DisplayBalances from './components/DisplayBalances';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const dummyBudgetData = [
    {
      transactionDescription: "Salary for July",
      transactionType: "credit",
      transactionAction: "Income",
      transactionDate: "2023-07-01",
      transactionValue: 50000,
      transactionId: "txn001"
    },
    {
      transactionDescription: "Grocery shopping",
      transactionType: "debit",
      transactionAction: "Expense",
      transactionDate: "2023-07-05",
      transactionValue: 5000,
      transactionId: "txn002"
    },
    {
      transactionDescription: "Rent payment",
      transactionType: "debit",
      transactionAction: "Expense",
      transactionDate: "2023-07-10",
      transactionValue: 15000,
      transactionId: "txn003"
    },
    {
      transactionDescription: "Freelance project",
      transactionType: "credit",
      transactionAction: "Income",
      transactionDate: "2023-07-15",
      transactionValue: 10000,
      transactionId: "txn004"
    },
    {
      transactionDescription: "Utility bills",
      transactionType: "debit",
      transactionAction: "Expense",
      transactionDate: "2023-07-20",
      transactionValue: 3000,
      transactionId: "txn005"
    },
    {
      transactionDescription: "Stock dividends",
      transactionType: "credit",
      transactionAction: "Income",
      transactionDate: "2023-07-25",
      transactionValue: 2000,
      transactionId: "txn006"
    }
  ];

  const [historyData, setHistoryData] = useState(dummyBudgetData);
  const [editItem, setEditItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleOk = (data) => {
    if (editItem) {
      const updatedData = historyData.map(item =>
        item.transactionId === editItem.transactionId ? {
          ...item, 
          transactionId: uuidv4(), 
          transactionDescription: data.description, 
          transactionType: data.isIncome ? 'credit' : 'debit', 
          transactionAction: data.isIncome ? 'Income' : 'Expense', 
          transactionDate: new Date().toISOString().split('T')[0],
          transactionValue: data.value
        } : item
      );
      setHistoryData(updatedData);
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
      setHistoryData([newTransaction, ...historyData]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setItemToDelete(id);
    setIsConfirmModalOpen(true);
  };

  const confirmDelete = () => {
    const index = historyData.findIndex(item => item.transactionId === itemToDelete);
    if (index > -1) {
      const updatedData = [...historyData];
      updatedData.splice(index, 1);
      setHistoryData(updatedData);
    }
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
    <Container style={{ paddingTop: 20, paddingBottom: 20 }}>
      <MainHeader title='Budget' />
      <DisplayBalance balanceLabel='Your Balance' balanceValue={balance} />
      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense} />
      <DisplayHistory dummyBudgetData={historyData} handleDelete={handleDelete} handleEdit={handleEdit} />
      <Modal open={isModalOpen} onClose={closeModal} size='small'>
        <Modal.Header>Edit Transaction<Button onClick={closeModal} style={{background: 'none', border: 'none'}}><Icon name='close' /></Button></Modal.Header>
        <Modal.Content>
          <NewEntryForm handleOk={handleOk} editItem={editItem} />
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
