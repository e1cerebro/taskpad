import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../actions/types";
const INITIAL_STATE = {
  projects: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log("projects:", action.project);
      return { ...state, projects: [...state.projects, action.project] };
    case CREATE_PROJECT_ERROR:
      console.log("Error :", action.error);
    default:
      return state;
  }
};
