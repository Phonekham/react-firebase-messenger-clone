import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCgg3y7syVJ_FOP9N6aAO5-0Vpt660iNEI",
  authDomain: "react-firebase-messenger-clone.firebaseapp.com",
  databaseURL: "https://react-firebase-messenger-clone.firebaseio.com",
  projectId: "react-firebase-messenger-clone",
  storageBucket: "react-firebase-messenger-clone.appspot.com",
  messagingSenderId: "839042074012",
  appId: "1:839042074012:web:6cdde8f81047afdf96b459",
  measurementId: "G-5JML8NVSD0",
});

const db = firebaseApp.firestore();
export default db;
