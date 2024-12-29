export const calculateBudgetSummary = (transactions) => {
  if (!Array.isArray(transactions)) {
    return { totalIncome: 0, totalExpense: 0, balance: 0 };
  }

  return transactions.reduce((acc, transaction) => {
    if (transaction.transactionAction === 'Income') {
      acc.totalIncome += transaction.transactionValue;
    } else if (transaction.transactionAction === 'Expense') {
      acc.totalExpense += transaction.transactionValue;
    }
    acc.balance = acc.totalIncome - acc.totalExpense;
    return acc;
  }, { totalIncome: 0, totalExpense: 0, balance: 0 });
};
