import {
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
  REMOVE_SUCCESS,
  UPDATE_SUCCESS,
} from "./types";
export const createProject = (project) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      //async action
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      await firestore.collection("projects").add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId,
        createdAt: new Date(),
      });

      dispatch({
        type: CREATE_PROJECT,
        project,
      });
    } catch (error) {
      dispatch({ type: CREATE_PROJECT_ERROR, error });
    }
  };
};

export const removeProject = (id) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = getFirestore();

      await firestore.collection("projects").doc(id).delete();

      dispatch({ type: REMOVE_SUCCESS, id });
    } catch (e) {
      console.log(e);
    }
  };
};
export const updateProject = (project, docId) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = getFirestore();

      await firestore
        .collection("projects")
        .doc(docId)
        .update({ ...project });

      dispatch({ type: UPDATE_SUCCESS });
    } catch (e) {
      console.log(e);
    }
  };
};
