import React from 'react';
import MainHeader from './MainHeader';
import { Grid, Icon, Segment } from 'semantic-ui-react';

function DispayHistory({ dummyBudgetData, handleDelete, handleEdit }) {
  return (
    <div>
      <MainHeader title='History' />
      {dummyBudgetData && dummyBudgetData.map((data) => (
        <Segment color={data.transactionType === 'credit' ? 'green' : 'red'} key={data.transactionId}>
          <Grid columns={3} textAlign='center'>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'>{data.transactionDescription}</Grid.Column>
              <Grid.Column width={3} textAlign='right'>{data.transactionValue}</Grid.Column>
              <Grid.Column width={3} textAlign='right'>
                <button onClick={() => handleEdit(data)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                  <Icon name='edit' bordered />
                </button>
                <button onClick={() => handleDelete(data.transactionId)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                  <Icon name='trash' bordered />
                </button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      ))}
    </div>
  );
}

export default DispayHistory;
