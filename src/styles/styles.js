import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #77c987;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 150rem;
  height: 80vh;
  background-color: #2c2c2d;
  color: #eee;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.7);
  display: grid;
  grid-template-columns: minmax(38%, 40rem) repeat(2, minmax(29%, 29rem));
  grid-template-rows: repeat(10, 1fr);
  grid-gap: 1rem;
`;