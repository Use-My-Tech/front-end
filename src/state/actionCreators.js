import * as types from "./actionTypes";
import axios from "axios";


export const changeHandler = e => dispatch => {
  dispatch({
    type: types.INPUT_CHANGE,
    payload: [e.target.name, e.target.value]
  });
};

export const onLogin = (formValues, history) => dispatch => {
  dispatch({ type: types.LOGIN_START });
  axios
    .post("https://usetechstuff.herokuapp.com/api/login", formValues)
    .then(res => {
      console.log(res.data.user.id)
      dispatch({ type: types.LOGIN });
      localStorage.setItem("token", res.data.token);
      history.push(`/${res.data.user.department}`);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      dispatch({ type: types.LOGIN_END });
    });
};

export const departmentCheck = bool => dispatch => {
  const type = bool ? "owner" : "renter";
  dispatch({ type: types.DEPARTMENT_CHECK, payload: type });
};

export const onSignup = (formValues, history) => dispatch => {
  dispatch({ type: types.SIGNUP_START });
  delete formValues["isSubmitting"];
  axios
    .post("https://usetechstuff.herokuapp.com/api/register", formValues)
    .then(res => {
      dispatch({ type: types.SIGNUP });
      history.push(`/login`);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      dispatch({ type: types.SIGNUP_END });
    });
};
