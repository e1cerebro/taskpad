const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase); //enable me to use the admin sdk

//https://us-central1-taskpad-c9b15.cloudfunctions.net/helloWorld
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

const createNotification = async (notification, project) => {
  const newNotification = await admin
    .firestore()
    .collection("notifications")
    .add(notification);

  return newNotification;
};

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate(async (doc) => {
    const project = doc.data();

    const notification = {
      content: "Added a new task",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: new Date(),
      authorId: project.authorId,
    };

    return await createNotification(notification, project);
  });

exports.onProjectDeleted = functions.firestore
  .document("projects/{projectId}")
  .onDelete(async (doc) => {
    const project = doc.data();

    const notification = {
      content: "Deleted a task",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: new Date(),
      authorId: project.authorId,
    };

    return await createNotification(notification, project);
  });

exports.userJoined = functions.auth.user().onCreate(async (user) => {
  const doc = await admin.firestore().collection("users").doc(user.uid).get();

  const newUser = doc.data();

  const notification = {
    content: "A new user joined",
    user: `${newUser.firstName} ${newUser.lastName}`,
    time: new Date(),
  };
  return await createNotification(notification);
});
