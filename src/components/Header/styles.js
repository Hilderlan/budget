import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Muli", serif;
    font-size: 6rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: #f46036;
    text-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.4);
  }
`;