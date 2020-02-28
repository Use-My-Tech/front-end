import React, { useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";
import "./App.css";

function App({ formValues, changeHandler, onLogin }) {
  // useEffect(() => {
  //   axios
  //     .post("https://usetechstuff.herokuapp.com/api/login", {
  //       username: "db",
  //       password: "123"
  //     })
  //     .then(res => {
  //       console.log(res.data.token);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="App">
      <Route exact path="/">
        <form>
        <label>
          username:
          <input
            name="username"
            onChange={changeHandler}
            value={formValues.username}
          />
        </label>
        <label>
          password:
          <input
            name="password"
            onChange={changeHandler}
            value={formValues.password}
          />
        </label>
        <button type="button" onClick={evt => onLogin(formValues)}>
          LOGIN
        </button>
      </form>
      </Route>
      <Route path="/signup">
        
      </Route>
      
    </div>
  );
}

function mapStateToProps(state) {
  return {
    formValues: state.formValues
  };
}

export default connect(mapStateToProps, actionCreators)(App);
