import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html {
    font-size: 14px;
  }

  button, input {
    outline: 0;
  }

  button {
    cursor: pointer;
  }
`;