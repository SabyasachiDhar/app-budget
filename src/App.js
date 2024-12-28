import { Container, Grid, Segment } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryFrom from './components/NewEntryFrom';
import DisplayBalance from './components/DisplayBalance';
import DispayHistory from './components/DispayHistory';

function App() {
  const dummyBudgetData = [
    {
      transactionDescription: "Salary for July",
      transactionType: "credit",
      transactionAction: "Income",
      transactionDate: "2023-07-01",
      transactionValue: 50000,
      transactionIndex: 0,
      transactionId: "txn001"
    },
    {
      transactionDescription: "Grocery shopping",
      transactionType: "debit",
      transactionAction: "Expense",
      transactionDate: "2023-07-05",
      transactionValue: 5000,
      transactionIndex: 1,
      transactionId: "txn002"
    },
    {
      transactionDescription: "Rent payment",
      transactionType: "debit",
      transactionAction: "Expense",
      transactionDate: "2023-07-10",
      transactionValue: 15000,
      transactionIndex: 2,
      transactionId: "txn003"
    },
    {
      transactionDescription: "Freelance project",
      transactionType: "credit",
      transactionAction: "Income",
      transactionDate: "2023-07-15",
      transactionValue: 10000,
      transactionIndex: 3,
      transactionId: "txn004"
    },
    {
      transactionDescription: "Utility bills",
      transactionType: "debit",
      transactionAction: "Expense",
      transactionDate: "2023-07-20",
      transactionValue: 3000,
      transactionIndex: 4,
      transactionId: "txn005"
    },
    {
      transactionDescription: "Stock dividends",
      transactionType: "credit",
      transactionAction: "Income",
      transactionDate: "2023-07-25",
      transactionValue: 2000,
      transactionIndex: 5,
      transactionId: "txn006"
    }
  ];

  const budgetSummary = dummyBudgetData.reduce((acc, transaction) => {
    if (transaction.transactionAction === 'Income') {
      acc.totalIncome += transaction.transactionValue;
    }
    else if (transaction.transactionAction === 'Expense') {
      acc.totalExpense += transaction.transactionValue;
    } acc.balance = acc.totalIncome - acc.totalExpense;
    return acc;
  }, {
    totalIncome: 0, totalExpense: 0, balance: 0
  });

  const {totalIncome, totalExpense, balance} = budgetSummary;
  
  return (
    <Container style={{ marginTop: 20, marginBottom: 20 }}> 
      <MainHeader title='Budget' />
      <DisplayBalance balanceLabel='Your Balance' balanceValue={balance} />  
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column textAlign='left'>
              <DisplayBalance balanceLabel='Income' balanceValue={totalIncome} colorType='green'/>  
            </Grid.Column>
            <Grid.Column  textAlign='left'>
              <DisplayBalance balanceLabel='Expenses' balanceValue={totalExpense} colorType='red'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <DispayHistory dummyBudgetData={dummyBudgetData} />
      
      <NewEntryFrom />
    </Container>
  );
}

export default App;
