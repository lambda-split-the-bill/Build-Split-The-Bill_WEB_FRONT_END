import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById('root');
const AppWithRouter = withRouter(App);
ReactDOM.render(
  <Router>
    <Provider store={store}>
    <AppWithRouter />
    </Provider>
  </Router>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
