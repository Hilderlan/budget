import React, {useState, useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import {v4 as uuidV4} from 'uuid'
import {Form, InputGroupIncome, InputGroupExpense, Input, InputSubmit} from './styles';

const INITIAL_VALUES = {
  text: '',
  amount: 0
}

const AddTransaction = () => {
  const [income, setIncome] = useState(INITIAL_VALUES);

  const {addIncome, addExpense} = useContext(GlobalContext);

  const [expense, setExpense] = useState(INITIAL_VALUES);

  const handleChangeIncome = (e) => {
    setIncome({...income, [e.target.name]: e.target.value});
  }

  const handleChangeExpense = (e) => {
    setExpense({...expense, [e.target.name]: e.target.value});
  }

  const handleSubmitIncome = e => {
    e.preventDefault();

    if(income.text.trim() && income.amount > 0) {
      const newIncomeTransaction = {
        id: uuidV4(),
        text: income.text,
        amount: income.amount * 1
      }
  
      addIncome(newIncomeTransaction);
      setIncome(INITIAL_VALUES);
    }
  }

  const handleSubmitExpense = e => {    
    e.preventDefault();

    if(expense.text.trim() && expense.amount > 0) {
      const newExpenseTransaction = {
        id: uuidV4(),
        text: expense.text,
        amount: expense.amount * 1
      }    
  
      addExpense(newExpenseTransaction);
      setExpense(INITIAL_VALUES);
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmitIncome}>
        <InputGroupIncome>
          <Input type="text" name="text" value={income.text} placeholder="Add Income..." autoComplete="off" onChange={handleChangeIncome} />
          <Input type="number" name="amount" value={income.amount} placeholder="Amount" autoComplete="off" onChange={handleChangeIncome} />
          <InputSubmit income />
        </InputGroupIncome>
      </Form>
      
      <Form onSubmit={handleSubmitExpense}>
        <InputGroupExpense>
          <Input type="text" name="text" value={expense.text} placeholder="Add Expense..." autoComplete="off" onChange={handleChangeExpense} />
          <Input type="number" name="amount" value={expense.amount} placeholder="Amount" autoComplete="off" onChange={handleChangeExpense} />
          <InputSubmit />
        </InputGroupExpense>
      </Form>
    </>
  );
}

export default AddTransaction;