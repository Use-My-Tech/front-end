import * as types from "./actionTypes";

const initialLoginFormState = {
  username: "",
  password: "",
  isSubmitting: false,
};

export function loginFormReducer(state = initialLoginFormState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        [action.payload[0]]: action.payload[1],
      };
    case types.LOGIN_START:
      return {
        ...state,
        isSubmitting: true,
      };
    case types.LOGIN_END:
      return initialLoginFormState;
    default:
      return state;
  }
}

const initialSignupFormState = {
  username: "",
  password: "",
  department: "owner",
  isSubmitting: false,
};

export function signupFormReducer(state = initialSignupFormState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        [action.payload[0]]: action.payload[1],
      };
    case types.DEPARTMENT_CHECK:
      return {
        ...state,
        department: action.payload,
      };
    case types.SIGNUP_START:
      return {
        ...state,
        isSubmitting: true,
      };
    case types.SIGNUP_END:
      return {
        ...state,
        isSubmitting: false,
      };
    default:
      return state;
  }
}

const initialAddFormState = {
  item_name: "",
  description: "",
  availability: 1,
  daily_rate: "",
  condition: "",
  location: "",
  imgs: "",
};

export function addFormReducer(state = initialAddFormState, action) {
  switch (action.type) {
    case types.ITEM_INPUT_CHANGE:
      return {
        ...state,
        [action.payload[0]]: action.payload[1],
      };
    case types.ADD_ITEM:
      return initialAddFormState;
    default:
      return state;
  }
}

const initialDataState = [];

export function dataReducer(state = initialDataState, action) {
  switch (action.type) {
    case types.FETCH:
      return action.payload;
    case types.DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    case types.ADD_ITEM:
      return state.concat(action.payload);
    default:
      return state;
  }
}

const initialCartState = [];

export function cartReducer(state = initialCartState, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      if (state.includes(action.payload)) {
        return state;
      } else {
        return state.concat(action.payload);
      }
    case types.DELETE_TO_CART:
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
}

export function spinnerReducer(state = false, action) {
  switch (action.type) {
    case types.SPINNER_START:
      return true;
    case types.SPINNER_STOP:
      return false;
    default:
      return state;
  }
}
