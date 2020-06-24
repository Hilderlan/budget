import styled from 'styled-components';

export const Form = styled.form`
  grid-column: 2 / -1;
  grid-row: 2 / 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const InputGroupIncome = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / 2;
  grid-row: 1 / -1;
`;

export const InputGroupExpense = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / -1;
  grid-row: 1 / -1;
`;

export const Input = styled.input`
  width: 30rem;
  margin-bottom: 2.5rem;
  border: none;
  background: transparent;
  border-bottom: 0.2rem solid #777;
  padding: 0.5rem 0.5rem 0.5rem 0;
  font-family: "Baloo Da 2", serif;
  font-size: 1.8rem;
  color: #eee;
  outline: none;
  transition: border-bottom 0.4s;

  &:focus {
    border-bottom: 0.2rem solid #77c987;
  }
`;

export const InputSubmit = styled.input.attrs({type: 'submit', value: 'Submit'})`
  width: 10rem;
  padding: 0.7rem;
  border: none;
  outline: none;
  border-radius: 0.7rem;
  font-family: "Muli", serif;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  color: #eee;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-top: 1rem;
  text-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.4);
  background-color: ${props => props.income ? ' #77c987' : '#ff716e'};

  &:active {
    transform: translateY(0.3rem);
  }
`;