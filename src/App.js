import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";
import Login from "./Components/Login";
import "./App.css";

function App({ formValues, changeHandler, onLogin }) {

  return (
    <div className="App">
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/signup"></Route>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    formValues: state.formValues
  };
}

export default connect(mapStateToProps, actionCreators)(App);
