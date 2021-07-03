import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';

import { App } from './App';

import './stylesheets/index.css';

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AppWithRouter />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
