import * as types from "./actionTypes";

const initialLoginFormState = {
  username: "",
  password: "",
  isSubmitting: false
};

export function loginFormReducer(state = initialLoginFormState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        [action.payload[0]]: action.payload[1]
      };
    case types.LOGIN_START:
      return {
        ...state,
        isSubmitting: true
      };
    case types.LOGIN_END:
      return {
        ...state,
        isSubmitting: false
      };
    default:
      return state;
  }
}

const initialSignupFormState = {
  username: "",
  password: "",
  department: "",
  isSubmitting: false
};

export function signupFormReducer(state = initialSignupFormState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        [action.payload[0]]: action.payload[1]
      };
    case types.DEPARTMENT_CHECK:
      return {
        ...state,
        department: action.payload
      };
    case types.SIGNUP_START:
      return {
        ...state,
        isSubmitting: true
      };
    case types.SIGNUP_END:
      return {
        ...state,
        isSubmitting: false
      };
    default:
      return state;
  }
}
