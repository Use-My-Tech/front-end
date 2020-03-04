//dependencies
import React from "react";
import { Route, NavLink, Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";

//components
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import OwnerDashboard from "./Components/OwnerDashboard";
import RenterDashboard from "./Components/RenterDashboard";
import ItemById from "./Components/ItemById";
import OwnerItems from "./Components/OwnerItems";
import RenterCart from "./Components/RenterCart";

//styles
import "./styles/App.css";
import { Button, Nav } from "./styles/styled";

function App({ logout }) {
  const history = useHistory();
  const type = localStorage.getItem("type");


  return (
    <div className="App">
      <Nav>
        {!localStorage.getItem("token") && (
          <>
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
              all items
            </NavLink>
            <NavLink exact to="/owner/items" activeClassName="active" replace>
              your items
            </NavLink>
          </>
        )}

        {type === "renter" && (
          <>
            <NavLink exact to="/renter" activeClassName="active" replace>
              rent
            </NavLink>
            <NavLink exact to="/renter/cart" activeClassName="active" replace>
              cart
            </NavLink>
          </>
        )}

        {!!localStorage.getItem("token") && (
          <Button type="button" onClick={evt => logout(history)}>
            logout
          </Button>
        )}
      </Nav>

      <Redirect exact path="/" to="/login"/>
          
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

      <PrivateRouteRenter exact path="/renter">
        <RenterDashboard />
      </PrivateRouteRenter>

      <PrivateRouteRenter path="/renter/cart">
        <RenterCart />
      </PrivateRouteRenter>

      <LoggedRoute path="/item:id">
        <ItemById />
      </LoggedRoute>
      
    </div>
  );
}

function UnloggedRoute({ children, ...rest }) {
  const tokenExists = !!localStorage.getItem("token");
  const type = localStorage.getItem("type");
  return (
    <Route {...rest}>
      {!tokenExists ? children : <Redirect to={`/${type}`} />}
    </Route>
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
    <Route {...rest}>
      {tokenExists && isRenter ? children : <Redirect to="/login" />}
    </Route>
  );
}

function PrivateRouteOwner({ children, ...rest }) {
  const tokenExists = !!localStorage.getItem("token");
  const isOwner = localStorage.getItem("type") === "owner";
  return (
    <Route {...rest}>
      {tokenExists && isOwner ? children : <Redirect to="/login" />}
    </Route>
  );
}

function mapStateToProps(state) {
  return {
    loginForm: state.loginForm
  };
}

export default connect(mapStateToProps, actionCreators)(App);
