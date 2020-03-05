import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import { useHistory } from "react-router-dom";

import { Button, Container, Form, Input } from "../styles/styled";

function Login({ loginForm, changeHandler, onLogin }) {
  const history = useHistory();
  return (
    <Container>
      <Form>
        <h1>Login</h1>
        <label htmlFor="username">username</label>

        <Input
          id="username"
          name="username"
          onChange={changeHandler}
          value={loginForm.username}
        />

        <label htmlFor="password">password</label>

        <Input
          id="password"
          name="password"
          onChange={changeHandler}
          value={loginForm.password}
        />

        <Button
          id="form-button"
          disabled={loginForm.isSubmitting}
          type="button"
          onClick={evt => onLogin(loginForm, history)}
        >
          LOGIN
        </Button>
      </Form>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    loginForm: state.loginForm
  };
}

export default connect(mapStateToProps, actionCreators)(Login);
