import React from 'react';
import { Grid, Header, Icon, Segment } from 'semantic-ui-react';

function DispayHistory({ dummyBudgetData, handleEdit, handleDelete }) {
  return (
    <Segment>
      <Header as='h2'>History</Header>
      {dummyBudgetData && dummyBudgetData.map((data) => (
        <Segment color={data.transactionType === 'credit' ? 'green' : 'red'} key={data.transactionId}>
          <Grid columns={3} textAlign='center' divided>
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
    </Segment>
  );
}

export default DispayHistory;
