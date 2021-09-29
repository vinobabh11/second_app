import React from 'react'
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = (props) => {

    if (props.item.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    }

    return (
        <div>
            <ul className="expense-list">
                {props.item.map((expenses) => (
                    <ExpenseItem
                        key={expenses.id}
                        title={expenses.title}
                        amount={expenses.amount}
                        date={expenses.date} />
                ))}
            </ul>
        </div>
    )
}

export default ExpenseList
