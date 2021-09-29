import './App.css';
import { NewExpense } from "./components/NewExpense/NewExpense";
import Expense from "./components/Expenses/Expense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  { id: '0', title: 'Car Insurance', amount: 265, date: new Date(2020, 5, 15) },
  { id: '1', title: 'Toilet paper', amount: 65, date: new Date(2021, 9, 16) },
  { id: '2', title: 'News Paper', amount: 25, date: new Date(2019, 10, 20) },
  { id: '3', title: 'Milk Bottle', amount: 165, date: new Date(2021, 4, 20) }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense =>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense item = {expenses}/>
    </>
  );
}

export default App;
