import React from 'react';
import GlobalStyles from './styles/global';
import {Container, Wrapper} from './styles/styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Wrapper>
          <h1>Hello World!</h1>
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
