import React, { useState } from 'react'
import './Expense.css'
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";


function Expense(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
      });

    return (
        <Card className="expense">
            <ExpensesFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler} />
            <ExpenseChart expense={filteredExpenses} />
            <ExpenseList item={filteredExpenses} />
        </Card>
    )
}

export default Expense
