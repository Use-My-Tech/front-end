import * as types from "./actionTypes";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const changeHandler = e => dispatch => {
  dispatch({
    type: types.INPUT_CHANGE,
    payload: [e.target.name, e.target.value]
  });
};

export const onLogin = formValues => dispatch => {
  dispatch({ type: types.LOGIN_START });
  axios
    .post("https://usetechstuff.herokuapp.com/api/login", formValues)
    .then(res => {
      dispatch({ type: types.LOGIN });
      localStorage.setItem("token", res.data.token);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      dispatch({ type: types.LOGIN_END });
    });
};

export const departmentCheck = (bool) => dispatch => {
  const type = bool ? "owner" : "renter"; 
  dispatch({ type: types.DEPARTMENT_CHECK, payload: type})
}

export const onSignup = formValues => dispatch => {
  dispatch({ type: types.SIGNUP_START });
  axios
    .post("https://usetechstuff.herokuapp.com/api/signup", formValues)
    .then(res => {
      dispatch({ type: types.SIGNUP });
      useHistory().push("/login")
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      dispatch({ type: types.SIGNUP_END });
    });
};
