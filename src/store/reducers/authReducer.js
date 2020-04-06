import {
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "../actions/types";
const INITIAL_STATE = {
  authError: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_ERROR:
      console.log("Login Error:", action.error);
      return { ...state, authError: action.error };
    case SIGNIN_SUCCESS:
      console.log("Login success");
      return { ...state, authError: null };
    case SIGNOUT_SUCCESS:
      console.log("SIGNOUT_SUCCESS success");
      return state;
    case SIGNUP_SUCCESS:
      console.log("SIGNUP_SUCCESS success");
      return { ...state, authError: null };
    case SIGNUP_ERROR:
      console.log("SIGNUP_ERROR success");
      return { ...state, authError: action.error.message };
    default:
      return state;
  }
};
