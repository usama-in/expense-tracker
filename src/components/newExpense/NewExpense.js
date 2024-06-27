import React, {useState} from 'react'
import './newexpense.css'
import FormExpense from './FormExpense'

const NewExpense=(props)=>{
   const[isEditing , setIsEditing]= useState(false);



    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
       
        props.onExpenseData(expenseData)
        setIsEditing(false)

    }
    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };
    
return (
   <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <FormExpense
          onSubmitExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
)
}


export default NewExpense