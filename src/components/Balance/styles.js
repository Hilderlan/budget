import styled from 'styled-components';

export const BalanceWrapper = styled.div`
  grid-column: 1 / 1;
  grid-row: 3 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  text-align: center;

  h2 {
    font-family: "Baloo Da 2", serif;
    font-size: 4.5rem;
    font-weight: 300;
    text-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.4);
  }

  h3 {
    font-family: "Baloo Da 2", serif;
    font-size: 4rem;
    font-weight: 300;
    text-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.4);
  }
`;

export const IncomeExpense = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10rem;
  font-family: "Muli", serif;
  text-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.4);
  text-align: right;

  h3 {
    font-size: 3.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
    width: 100%;
  }

  p {
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
  }
`;

export const Plus = styled.div`
  margin: 0 2rem;
  color: #77c987;
`;

export const Minus = styled.div`
  margin: 0 2rem;
  color: #ff716e;
`;