import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';
import {GlobalContextProvider} from './context/GlobalState';
import GlobalStyles from './styles/global';
import {Container, Wrapper} from './styles/styles';

function App() {
  return (
    <>
      <GlobalContextProvider>
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
      </GlobalContextProvider>
    </>
  );
}

export default App;
