import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container style={{ marginTop: 20, marginBottom: 20 }}> 
      <Header as='h2'>Budeget</Header>
      <Statistic size='small'>
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>5,550</Statistic.Value>
      </Statistic>
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' style={{ textAlign: "left" }}>
                <Statistic.Label>Income</Statistic.Label>
                <Statistic.Value>2,500</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size='tiny' style={{ textAlign: "left" }}>
                <Statistic.Label>Expenses</Statistic.Label>
                <Statistic.Value>1,000</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>
      <Segment color='red'>
        <Grid columns={3} textAlign='center'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>10</Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='green'>
        <Grid columns={3} textAlign='center'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>10</Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='red'>
        <Grid columns={3} textAlign='center'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>10</Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input icon='tags' width={12} label='Description' placeholder='New shinny thing' />
          <Form.Input width={4} label='Value' placeholder='100.00' icon='dollar' iconPosition='left' />

        </Form.Group>
        <Button.Group>
          <Button color='red'>Cancel</Button>
          <Button.Or />
          <Button color='green'>Ok</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
