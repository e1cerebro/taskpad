import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "./types";
export const createProject = project => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      //async action
      const firestore = getFirestore();
      await firestore.collection("projects").add({
        ...project,
        authorFirstName: "Joy",
        authorLastName: "Nwachukwu",
        authorId: 12345,
        createdAt: new Date()
      });

      dispatch({
        type: CREATE_PROJECT,
        project
      });
    } catch (error) {
      dispatch({ type: CREATE_PROJECT_ERROR, error });
    }
  };
};
