import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';
import GlobalStyles from './styles/global';
import {Container, Wrapper} from './styles/styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Wrapper>
          <Header />
          <Balance />
          <AddTransaction />
          <IncomeList />
          <ExpenseList />
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
