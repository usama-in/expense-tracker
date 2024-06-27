import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import React , {useState} from "react";
import "./expenseitem.css";
const ExpenseItem = (props) => {
    
     


   
    
    
    const expenseAmount = props.amount;
  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">PKR {expenseAmount}</div>
      </div>
      
    </Card>
  );
};

export default ExpenseItem;
