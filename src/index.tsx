import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './Routes'
import store from './store';
import { history } from "./store"
import { ConnectedRouter } from "connected-react-router"
import './style.css'
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes></Routes>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);