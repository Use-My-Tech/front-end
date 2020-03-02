import React from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact to="/" activeClassName="active" replace>
          home
        </NavLink>
        <NavLink exact to="/login" activeClassName="active" replace>
          login
        </NavLink>
        <NavLink exact to="signup" activeClassName="active" replace>
          sign up
        </NavLink>
      </nav>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute path="/owner">

      </PrivateRoute>
      <PrivateRoute path="/renter">

      </PrivateRoute>
      
    </div>
  );
}

function PrivateRoute({children, ...rest}) {
  const tokenExists = !!localStorage.getItem("token");
  return (
  <Route {...rest}>{tokenExists ? children : <Redirect to="/login" />}</Route>
  )
}

function mapStateToProps(state) {
  return {
    loginForm: state.loginForm
  };
}

export default connect(mapStateToProps, actionCreators)(App);
