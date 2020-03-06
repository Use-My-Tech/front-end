import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import thunk from "redux-thunk";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {
  loginFormReducer,
  signupFormReducer,
  addFormReducer,
  dataReducer,
  cartReducer,
  spinnerReducer
} from "./state/reducers";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const combinedReducer = combineReducers({
  loginForm: loginFormReducer,
  signupForm: signupFormReducer,
  addForm: addFormReducer,
  data: dataReducer,
  cart: cartReducer,
  spinner: spinnerReducer,
});

const store = createStore(
  combinedReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
