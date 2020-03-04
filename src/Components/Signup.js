import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import { useHistory } from "react-router-dom";

import { Button, Container, Input, Form, TypeButton } from "../styles/styled";

function Signup({ signupForm, changeHandler, departmentCheck, onSignup }) {
  const [checked, setChecked] = useState(false);
  const history = useHistory();
  return (
    <Container>
      <Form>
        <h1>Signup</h1>
        <label>
          username:
          <Input
            name="username"
            onChange={changeHandler}
            value={signupForm.username}
          />
        </label>
        <label>
          password:
          <Input
            name="password"
            onChange={changeHandler}
            value={signupForm.password}
          />
        </label>
        <label>
        <TypeButton
          type="button"
          onClick={evt => {
            setChecked(!checked);
            departmentCheck(checked);
          }}
        >
          {checked ? "type: renter" : "type: owner"}
        </TypeButton>
        </label>
        <Button
          id="form-button"
          disabled={signupForm.isSubmitting}
          type="button"
          onClick={evt => onSignup(signupForm, history)}
        >
          SIGN UP
        </Button>
      </Form>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    signupForm: state.signupForm
  };
}

export default connect(mapStateToProps, actionCreators)(Signup);
