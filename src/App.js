
import Expenses from './components/Expenses'
import NewExpense from './components/newExpense/NewExpense';
import React , {useState} from 'react';

const expense = [
  {
    id: 1,
    title: "Phone earphones",
    amount: 3500,
    date: new Date(2022, 5, 21),
  },
  {
    id: 2,
    title: "Water Bottle",
    amount: 1100,
    date: new Date(2022, 6, 1),
  },
  {
    id: 3,
    title: "EarBuds",
    amount: 3100,
    date: new Date(2021, 6, 3),
  },
  {
    id: 4,
    title: "Watch",
    amount: 2000,
    date: new Date(2020, 6, 8),
  },
];

function App() {

  const [newExpense , setNewExpense]=useState(expense)
  


  
  

  const expenseDataHandler=(expenses)=>{
    
    setNewExpense((prev)=> [ expenses ,...prev ])
    
     
     
    
   
  }

  return (
    <div>
      <NewExpense  onExpenseData={expenseDataHandler}/>
     {/* { newExpense.map((expense)=>  <Expenses expense={newExpense} />)} */}
      <Expenses expense={newExpense} />

     
    </div>
  );
}

export default App;
