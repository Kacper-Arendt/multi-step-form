import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {Main} from "./components/form/Main";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    line-height: 150%;
    background: #3C3C3B;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle/>
            <Main/>
        </>
    );
}

export default App;
