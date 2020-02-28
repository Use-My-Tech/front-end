import * as types from "./actionTypes";

const initialFormState = {
    username: "",
    password: "",
}

export function formReducer(state = initialFormState, action) {
    switch(action.type) {
        case types.INPUT_CHANGE:
            return {
                ...state,
                [action.payload[0]]: action.payload[1]
            }
        default:
            return state;
    }
}