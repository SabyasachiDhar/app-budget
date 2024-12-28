import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import ButtonGroupComponent from './ButtonGroupComponent';
import MainHeader from './MainHeader';

function NewEntryForm({ handleOk, editItem }) {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isIncome, setIsIncome] = useState(false);
  const [isExpense, setIsExpense] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (editItem) {
      setDescription(editItem.transactionDescription);
      setValue(editItem.transactionValue);
      setIsIncome(editItem.transactionType === 'credit');
      setIsExpense(editItem.transactionType === 'debit');
    } else {
      setDescription('');
      setValue('');
      setIsIncome(false);
      setIsExpense(false);
    }
  }, [editItem]);

  const handleSubmitBtn = () => {
    if (!description || value === 0 || (!isIncome && !isExpense)) {
      setIsError(true);
      return;
    } else {
      setIsError(false);
    }

    const formData = {
      description,
      value: parseFloat(value),
      isIncome,
      isExpense,
    };
    handleOk(formData);
  };

  const handleCancelBtn = () => {
    setDescription('');
    setValue('');
    setIsIncome(false);
    setIsExpense(false);
    setIsError(false);
  };

  const isEmpty = !description || value === 0 || (!isIncome && !isExpense);

  return (
    <>
      <MainHeader title={editItem ? 'Edit transaction' : 'Add new transaction'} />
      <Form unstackable>
        <Form.Group style={{ display: 'flex', alignItems: 'end' }}>
          <Form.Input
            icon='tags'
            value={description}
            width={8}
            label='Description'
            placeholder='New shiny thing'
            onChange={(e) => setDescription(e.target.value)}
          />
          <Form.Input
            width={4}
            label='Value'
            value={value}
            placeholder='100.00'
            icon='dollar'
            iconPosition='left'
            onChange={(e) => setValue(e.target.value)}
          />
          <Form.Checkbox
            width={2}
            label='Is income'
            checked={isIncome}
            onChange={() => setIsIncome(!isIncome)}
            disabled={isExpense}
          />
          <Form.Checkbox
            width={2}
            label='Is expense'
            checked={isExpense}
            onChange={() => setIsExpense(!isExpense)}
            disabled={isIncome}
          />
        </Form.Group>
        <ButtonGroupComponent handleOk={handleSubmitBtn} handleCancel={handleCancelBtn} disabled={isEmpty} />
        {isError && <p style={{ margin: '20px 0', color: 'red' }}>Error: Unable to add transaction</p>}
      </Form>
    </>
  );
}

export default NewEntryForm;
