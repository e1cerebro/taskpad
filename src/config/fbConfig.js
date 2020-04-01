import firebase from "firebase/app";
import "firebase/firestore"; //Allows you to use the database
import "firebase/auth"; //Allows you to use authentication

var config = {
  apiKey: "AIzaSyBwG-24jEA6Xpm8v48DybgJinApVBX1QbU",
  authDomain: "taskpad-c9b15.firebaseapp.com",
  databaseURL: "https://taskpad-c9b15.firebaseio.com",
  projectId: "taskpad-c9b15",
  storageBucket: "taskpad-c9b15.appspot.com",
  messagingSenderId: "631913947825",
  appId: "1:631913947825:web:c7d870431c88f7e68cf890"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;
