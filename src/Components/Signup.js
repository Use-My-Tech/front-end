import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function Signup({ signupForm, changeHandler, departmentCheck, onSignup }) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <form>
        <label>
          username:
          <input
            name="username"
            onChange={changeHandler}
            value={signupForm.username}
          />
        </label>
        <label>
          password:
          <input
            name="password"
            onChange={changeHandler}
            value={signupForm.password}
          />
        </label>
        <label>type: </label>
        <button
          type="button"
          onClick={evt => {
            setChecked(!checked);
            departmentCheck(checked);
          }}
        >
          {checked ? "renter" : "owner"}
        </button>

        <button
          disabled={signupForm.isSubmitting}
          type="button"
          onClick={evt => onSignup(signupForm)}
        >
          SIGN UP
        </button>
      </form>
    </>
  );
}

function mapStateToProps(state) {
  return {
    signupForm: state.signupForm
  };
}

export default connect(mapStateToProps, actionCreators)(Signup);
