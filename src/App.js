import React from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import OwnerDashboard from "./Components/OwnerDashboard";
import RenterDashboard from "./Components/RenterDashboard";
import ItemById from "./Components/ItemById";
import "./styles/App.css";

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
        <NavLink exact to="owner" activeClassName="active" replace>
          owner
        </NavLink>
        <NavLink exact to="renter" activeClassName="active" replace>
          renter
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
        <OwnerDashboard />
      </PrivateRoute>
      <PrivateRoute path="/renter">
        <RenterDashboard />
      </PrivateRoute>
      <PrivateRoute exact path="/item/:id">
        <ItemById />
      </PrivateRoute>
    </div>
  );
}

function PrivateRoute({ children, ...rest }) {
  const tokenExists = !!localStorage.getItem("token");
  return (
    <Route {...rest}>{tokenExists ? children : <Redirect to="/login" />}</Route>
  );
}

function mapStateToProps(state) {
  return {
    loginForm: state.loginForm
  };
}

export default connect(mapStateToProps, actionCreators)(App);
