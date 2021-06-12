import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { unmountComponentAtNode } from "react-dom";

const firebaseConfig = {
    apiKey: "AIzaSyAhLROt51pgbgIIsQSvd6EiZG172awgtUg",
    authDomain: "projecttinderpwr.firebaseapp.com",
    projectId: "projecttinderpwr",
    storageBucket: "projecttinderpwr.appspot.com",
    messagingSenderId: "476826110713",
    appId: "1:476826110713:web:c4afaf81a5bdf32ba7f028"
  };

  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  } else {
      firebase.app();
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const addNewStudent = (uName, uSurname, uUsername, uDesc, uTags) => {
      firestore.collection("students").add({
            name: uName,
            surname: uSurname,
            username: uUsername,
            desc: uDesc,
            tags: uTags
      });
  }

  export const addNewGroup = (gName, gSize, gUsername, gDesc, gTags) => {
    firestore.collection("groups").add({
          name: gName,
          size: gSize,
          username: gUsername,
          desc: gDesc,
          tags: gTags
    });
}

  export const getAllStudents = async () => {
      return firestore.collection("students").get();
  }

  export const getAllGroups = async () => {
    return firestore.collection("groups").get();
}