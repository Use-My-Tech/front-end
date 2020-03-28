import * as types from "./actionTypes";
import axios from "../axiosWithAuth";

export const changeHandler = e => dispatch => {
  dispatch({
    type: types.INPUT_CHANGE,
    payload: [e.target.name, e.target.value]
  });
};

export const itemChangeHandler = e => dispatch => {
  dispatch({
    type: types.ITEM_INPUT_CHANGE,
    payload: [e.target.name, e.target.value]
  });
};

export const onLogin = (formValues, history) => dispatch => {
  dispatch({ type: types.LOGIN_START });
  dispatch({ type: types.SPINNER_START });
  axios()
    .post("https://eu-use-my-tech.herokuapp.com/api/login", formValues)
    .then(res => {
      dispatch({ type: types.LOGIN });
      localStorage.setItem("type", res.data.user.department);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", res.data.user.id);
      history.push(`/${res.data.user.department}`);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      dispatch({ type: types.LOGIN_END });
      dispatch({ type: types.SPINNER_STOP });
    });
};

export const departmentCheck = bool => dispatch => {
  const type = bool ? "owner" : "renter";
  dispatch({ type: types.DEPARTMENT_CHECK, payload: type });
};

export const onSignup = (formValues, history) => dispatch => {
  dispatch({ type: types.SIGNUP_START });
  dispatch({ type: types.SPINNER_START });
  delete formValues["isSubmitting"];
  axios()
    .post("https://eu-use-my-tech.herokuapp.com/api/register", formValues)
    .then(res => {
      dispatch({ type: types.SIGNUP });
      history.push(`/login`);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      dispatch({ type: types.SIGNUP_END });
      dispatch({ type: types.SPINNER_STOP });
    });
};

export const fetch = url => dispatch => {
  dispatch({ type: types.SPINNER_START });
  axios()
    .get(url)
    .then(res => {
      dispatch({ type: types.FETCH, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      dispatch({ type: types.SPINNER_STOP });
    });
};

export const onAdd = (formValues, userID) => dispatch => {
  dispatch({ type: types.SPINNER_START });
  axios()
    .post(
      `https://eu-use-my-tech.herokuapp.com/api/users/${userID}/items`,
      formValues
    )
    .then(res => {
      formValues.user_id = userID;
      dispatch({ type: types.ADD_ITEM, payload: formValues });
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      dispatch({ type: types.SPINNER_STOP });
    });
};

export const deleteItem = id => dispatch => {
  dispatch({ type: types.SPINNER_START });
  axios()
    .delete(`https://eu-use-my-tech.herokuapp.com/api/items/${id}`)
    .then(res => {
      dispatch({ type: types.DELETE_ITEM, payload: id });
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      dispatch({ type: types.SPINNER_STOP });
    });
};

export const logout = history => dispatch => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("type");
  history.push("/login");
};

export const addToCart = item => dispatch => {
  dispatch({ type: types.ADD_TO_CART, payload: item });
};

export const deleteToCart = item => dispatch => {
  dispatch({ type: types.DELETE_TO_CART, payload: item });
};
