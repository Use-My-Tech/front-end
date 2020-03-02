import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function Signup({signupForm, changeHandler, departmentCheck, onSignup}) {
  const [checked, setChecked] = useState(false)
  console.log(checked)
    return(
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
        <label>
          <input type="checkbox" onClick={evt => {setChecked(!checked); departmentCheck(checked)}} />
        </label>
        <button type="button" onClick={evt => onSignup(signupForm)}>
          SIGN UP
        </button>
      </form>
        </>
    )
}

function mapStateToProps(state) {
    return {
      signupForm: state.signupForm
    };
  }
  
  export default connect(mapStateToProps, actionCreators)(Signup);
  