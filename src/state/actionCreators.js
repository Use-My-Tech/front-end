import * as types from "./actionTypes";
import axios from "axios";

export const changeHandler = e => dispatch => {
  dispatch({
    type: types.INPUT_CHANGE,
    payload: [e.target.name, e.target.value]
  });
};

export const onLogin = formValues => dispatch => {
  axios
    .post("https://usetechstuff.herokuapp.com/api/login", formValues)
    .then(res => {
      dispatch({ type: types.LOGIN });
      localStorage.setItem("token", res.data.token);
    })
    .catch(err => {
      console.log(err);
    });
};
