import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { AppWithRouter } from "./components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  * {
    background: none;

    border: none;
    border-radius: 0;

    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <AppWithRouter />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
