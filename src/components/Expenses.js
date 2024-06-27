import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import "./expense.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = ({ expense }) => {
  const [filterYear, setFilterYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filterItems=filterYear==='' ? expense :  expense.filter(
    (item) => item.date.getFullYear().toString() === filterYear
  );

  return (
    <li className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filterItems} />

      <ExpensesList items={filterItems} />

     
    </li>
  );
};

export default Expenses;
