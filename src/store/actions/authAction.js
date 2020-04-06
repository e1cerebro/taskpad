import {
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from "./types";
export const signIn = (credentials) => {
  return async (dispatch, getState, { getFirebase }) => {
    try {
      const firebase = getFirebase();
      await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
      dispatch({ type: SIGNIN_SUCCESS });
    } catch (error) {
      dispatch({ type: SIGNIN_ERROR, error: "Login error" });
    }
  };
};

export const signOut = () => {
  return async (dispatch, getState, { getFirebase }) => {
    try {
      const firebase = getFirebase();
      await firebase.auth().signOut();

      dispatch({ type: SIGNOUT_SUCCESS });
    } catch (e) {
      console.log(e);
    }
  };
};
export const deleteProfile = () => {
  return async (dispatch, getState, { getFirebase }) => {
    try {
      const firebase = getFirebase();
      const user = await firebase.auth().currentUser;
      await user.delete();
    } catch (e) {
      console.log(e);
    }
  };
};
export const signUp = (newUser) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firebase = getFirebase();
      const firestore = getFirestore();

      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password);

      await firestore
        .collection("users")
        .doc(response.user.uid) //this line was used because I wanted to create a new doc with the new user ID
        .set({
          firstName: newUser.firstname,
          lastName: newUser.lastname,
          phone: newUser.phone,
          initials: newUser.firstname[0] + newUser.lastname[0],
        });

      dispatch({ type: SIGNUP_SUCCESS });
    } catch (error) {
      console.log(error);
      dispatch({ type: SIGNUP_ERROR, error });
    }
  };
};
export const resetPassword = (data) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firebase = getFirebase();
      const firestore = getFirestore();

      dispatch({ type: SIGNUP_SUCCESS });
    } catch (error) {
      console.log(error);
      dispatch({ type: SIGNUP_ERROR, error });
    }
  };
};
