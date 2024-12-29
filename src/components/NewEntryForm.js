import React, { useState, useEffect } from 'react';
import { Button, Form, Segment, Checkbox, Message } from 'semantic-ui-react';
import ButtonGroupComponent from './ButtonGroupComponent';
import MainHeader from './MainHeader';

function NewEntryForm({ handleOk, editItem, closeModal }) {
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
    <Form unstackable>
      <Segment>
        <MainHeader title={editItem ? 'Edit transaction' : 'Add new transaction'} />
        <Form.Group>
          <Form.Input
            icon='tags'
            width={12}
            value={description}
            label='Description'
            placeholder='New shiny thing'
            onChange={(e) => setDescription(e.target.value)}
          />
          <Form.Input
            label='Value'
            width={4}
            value={value}
            placeholder='100.00'
            icon='dollar'
            iconPosition='left'
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Group>
        <Form.Group inline>
          <Form.Field>
            <Checkbox
              label='Is income'
              checked={isIncome}
              onChange={() => setIsIncome(!isIncome)}
              disabled={isExpense}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              label='Is expense'
              checked={isExpense}
              onChange={() => setIsExpense(!isExpense)}
              disabled={isIncome}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group style={{ display: 'flex', justifyContent: 'space-between', margin:'0px'}}>
          {editItem && <Button color='grey' onClick={closeModal}>Close</Button>}
          <ButtonGroupComponent handleOk={handleSubmitBtn} handleCancel={handleCancelBtn} disabled={isEmpty} isEditItem={editItem} />
        </Form.Group>
        {isError && <Message negative content='Error: Unable to add transaction' />}
      </Segment>
    </Form>
  );
}

export default NewEntryForm;
