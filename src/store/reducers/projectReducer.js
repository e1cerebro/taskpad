import {
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
  REMOVE_SUCCESS,
  UPDATE_SUCCESS,
} from "../actions/types";
const INITIAL_STATE = {
  projects: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return { ...state, projects: [...state.projects, action.project] };
    case UPDATE_SUCCESS:
      return { ...state, projects: [...state.projects, action.project] };
    case REMOVE_SUCCESS:
      return state;
    case CREATE_PROJECT_ERROR:
      console.log("Error :", action.error);
    default:
      return state;
  }
};
