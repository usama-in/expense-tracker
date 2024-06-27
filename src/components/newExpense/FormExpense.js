import React, { useState } from "react";
import "./formexpense.css";
const FormExpense = (props) => {
    const [titleHandler, setTitleHandler] = useState("");
    const [amountHandler, setAmountHandler] = useState("");
    const [dateHandler, setDateHandler] = useState("");

  // Alternative way to use multiple states in single state
//   const [userInput, setUserInput] = useState({
//     titleHandler: "",
//     amountHandler: "",
//     dateHandler: "",
//   });


  const titleChangeHandler = (event) => {
    setTitleHandler(event.target.value);


    // Alternative way to use multiple states in single state
    // setUserInput({
    //     ...userInput,
    //     titleHandler:event.target.value
    // })

    //  in this react will always update in the latest previous state
    // setUserInput((previosState)=>{
    //     return ({...previosState , titleHandler:event.target.value })
    // })
  };
  const amountChangeHandler = (event) => {
    setAmountHandler(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDateHandler(event.target.value);
  };

  const formHandler=(event)=>{
    event.preventDefault();
    const expenseItems ={
        title:titleHandler,
        amount : amountHandler,
        date : new Date(dateHandler)
    };
    props.onSubmitExpenseData(expenseItems)
    setTitleHandler('')
    setAmountHandler('')
    setDateHandler('')
  }

  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleHandler} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={amountHandler}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2024-12-31"
            value={dateHandler}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};
export default FormExpense;
