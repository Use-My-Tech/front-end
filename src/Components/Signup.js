import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function Signup({formValues, changeHandler, onLogin}) {
    return(
        <>
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
          SIGN UP
        </button>
      </form>
        </>
    )
}

function mapStateToProps(state) {
    return {
      formValues: state.formValues
    };
  }
  
  export default connect(mapStateToProps, actionCreators)(Signup);
  