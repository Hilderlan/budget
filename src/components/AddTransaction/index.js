import React, {useState, useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import {v4 as uuidV4} from 'uuid'
import {Form, InputGroupIncome, InputGroupExpense, Input, InputSubmit} from './styles';

const AddTransaction = () => {
  const [income, setIncome] = useState({
    text: '',
    amount: 0
  });

  const {addIncome, addExpense} = useContext(GlobalContext);

  const [expense, setExpense] = useState({
    text: '',
    amount: 0
  });

  const handleChangeIncome = (e) => {
    setIncome({...income, [e.target.name]: e.target.value});
  }

  const handleChangeExpense = (e) => {
    setExpense({...expense, [e.target.name]: e.target.value});
  }

  const handleSubmitIncome = e => {    
    e.preventDefault();

    const newIncomeTransaction = {
      id: uuidV4(),
      text: income.text,
      amount: income.amount * 1
    }

    addIncome(newIncomeTransaction);
  }

  const handleSubmitExpense = e => {    
    e.preventDefault();

    const newExpenseTransaction = {
      id: uuidV4(),
      text: expense.text,
      amount: expense.amount * 1
    }    

    addExpense(newExpenseTransaction);
  }

  return (
    <>
      <Form onSubmit={handleSubmitIncome}>
        <InputGroupIncome>
          <Input type="text" name="text" placeholder="Add Income..." autoComplete="off" onChange={handleChangeIncome} />
          <Input type="number" name="amount" placeholder="Amount" autoComplete="off" onChange={handleChangeIncome} />
          <InputSubmit income />
        </InputGroupIncome>
      </Form>
      
      <Form onSubmit={handleSubmitExpense}>
        <InputGroupExpense>
          <Input type="text" name="text" placeholder="Add Expense..." autoComplete="off" onChange={handleChangeExpense} />
          <Input type="number" name="amount" placeholder="Amount" autoComplete="off" onChange={handleChangeExpense} />
          <InputSubmit />
        </InputGroupExpense>
      </Form>
    </>
  );
}

export default AddTransaction;