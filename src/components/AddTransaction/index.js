import React from 'react';
import {Form, InputGroupIncome, InputGroupExpense, Input, InputSubmit} from './styles';

const AddTransaction = () => {
  return (
    <Form>
      <InputGroupIncome>
        <Input type="text" placeholder="Add Income..." autoComplete="off" />
        <Input type="number" placeholder="Amount" autoComplete="off" />
        <InputSubmit income />
      </InputGroupIncome>
      
      <InputGroupExpense>
        <Input type="text" placeholder="Add Expense..." autoComplete="off" />
        <Input type="number" placeholder="Amount" autoComplete="off" />
        <InputSubmit />
      </InputGroupExpense>
    </Form>
  );
}

export default AddTransaction;