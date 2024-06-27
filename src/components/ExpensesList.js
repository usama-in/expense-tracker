import React from 'react'
import ExpenseItem from './ExpenseItem'
import './expenseslist.css'

const ExpensesList = ({items}) => {

    if(items.length===0){
        return(<h2 className='expenses-list__fallback'> Found No Expenses</h2>)
    }
  return (
    <ul className='expenses-list'>
        {/* {filterItems.length === 0 && <p style={{color:"white", textAlign:'center'}}>there is no item</p>} */}
    {items.length > 0 &&
      items.map((expenseItem) => (
        <ExpenseItem
          key={expenseItem.id}
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
        />
      ))}
      </ul>
  )
}

export default ExpensesList