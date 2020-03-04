import React from "react";
import { Route, NavLink, Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import OwnerDashboard from "./Components/OwnerDashboard";
import RenterDashboard from "./Components/RenterDashboard";
import ItemById from "./Components/ItemById";
import OwnerItems from "./Components/OwnerItems";
import "./styles/App.css";

const type = localStorage.getItem("type");

function App({ logout }) {
  const history = useHistory();
  
  return (
    <div className="App">
      <nav>
        {!localStorage.getItem("token") && (
          <>
            <NavLink exact to="/" activeClassName="active" replace>
              home
            </NavLink>
            <NavLink exact to="/login" activeClassName="active" replace>
              login
            </NavLink>
            <NavLink exact to="/signup" activeClassName="active" replace>
              signup
            </NavLink>
          </>
        )}

        {type === "owner" && (
          <>
          <NavLink exact to="/owner" activeClassName="active" replace>
            owner
          </NavLink>
          <NavLink exact to="/owner/items" activeClassName="active" replace>
          your items
        </NavLink>
        </>
        )}

        {type === "renter" && (
          <NavLink exact to="/renter" activeClassName="active" replace>
            renter
          </NavLink>
        )}

        {!!localStorage.getItem("token") && (
          <button type="button" onClick={evt => logout(history)}>
            logout
          </button>
        )}
      </nav>

      <UnloggedRoute exact path="/">
        <Home />
      </UnloggedRoute>

      <UnloggedRoute path="/signup">
        <Signup />
      </UnloggedRoute>

      <UnloggedRoute path="/login">
        <Login />
      </UnloggedRoute>

      <PrivateRouteOwner exact path="/owner">
        <OwnerDashboard />
      </PrivateRouteOwner>

      <PrivateRouteOwner path="/owner/items">
        <OwnerItems />
      </PrivateRouteOwner>

      <PrivateRouteRenter path="/renter">
        <RenterDashboard />
      </PrivateRouteRenter>

      <LoggedRoute path="/item:id">
        <ItemById />
      </LoggedRoute>
    </div>
  );
}

function UnloggedRoute({ children, ...rest }) {
  const tokenExists = !!localStorage.getItem("token");
  return (
    <Route {...rest}>{!tokenExists ? children : <Redirect to={`/${type}`} />}</Route>
  );
}

function LoggedRoute({ children, ...rest }) {
  const tokenExists = !!localStorage.getItem("token");
  return (
    <Route {...rest}>{tokenExists ? children : <Redirect to="/login" />}</Route>
  );
}

function PrivateRouteRenter({ children, ...rest }) {
  const tokenExists = !!localStorage.getItem("token");
  const isRenter = localStorage.getItem("type") === "renter";
  return (
    <Route {...rest}>{tokenExists && isRenter ? children : <Redirect to="/login" />}</Route>
  );
}

function PrivateRouteOwner({ children, ...rest }) {
  const tokenExists = !!localStorage.getItem("token");
  const isOwner = localStorage.getItem("type") === "owner";
  return (
    <Route {...rest}>{tokenExists && isOwner ? children : <Redirect to="/login" />}</Route>
  );
}

function mapStateToProps(state) {
  return {
    loginForm: state.loginForm
  };
}

export default connect(mapStateToProps, actionCreators)(App);
