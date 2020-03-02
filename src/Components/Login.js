import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function Login({ loginForm, changeHandler, onLogin }) {
  return (
    <>
      <form>
        <label>
          username:
          <input
            name="username"
            onChange={changeHandler}
            value={loginForm.username}
          />
        </label>
        <label>
          password:
          <input
            name="password"
            onChange={changeHandler}
            value={loginForm.password}
          />
        </label>
        <button
          disabled={loginForm.isSubmitting}
          type="button"
          onClick={evt => onLogin(loginForm)}
        >
          LOGIN
        </button>
      </form>
    </>
  );
}

function mapStateToProps(state) {
  return {
    loginForm: state.loginForm
  };
}

export default connect(mapStateToProps, actionCreators)(Login);
