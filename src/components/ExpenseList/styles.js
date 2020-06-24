import styled from 'styled-components';

export const Transactions = styled.div`
  margin-top: 3rem;
  grid-column: ${props => props.income? '2 / 3' : '3 / -1'};
  grid-row: 5 / -1;

  h2 {
    font-family: "Baloo da 2", serif;
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }
`;

export const TransactionsList = styled.div`
  width: 92%;
  max-height: 35rem;
  overflow: hidden;
  overflow-y: auto;
`;

export const Transaction = styled.div`
  list-style: none;
  font-family: "Baloo da 2", serif;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  margin-bottom: 1.5rem;
  color: #fff;
  padding: 0.4rem 0.4rem 0.4rem 0.7rem;
  border-radius: 0.3rem;
  width: 28rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  background-color: ${props => props.income ? '#5a9b67' : '#cf5856'};

  h3 {
    width: 23rem;
  }

  span {
    transform: translateX(3rem);
  }

  button {
    transform: translateX(4rem);
    border: none;
    background-color: transparent;
    font-size: 2rem;
    margin: 0 1rem;
    color: #d4403e;
    text-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.4);
    cursor: pointer;
    outline: none;
  }
`;