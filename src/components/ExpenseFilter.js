import React from 'react'
import './expensefilter.css'


const ExpenseFilter = ({selected ,onFilterChange}) => {
    // console.log(selected)

    const filterChangedHandler=(e)=>{
        onFilterChange(e.target.value)
        console.log(e.target.value)
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selected} onChange={filterChangedHandler}>
        <option value=''>Select Year</option>  
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter