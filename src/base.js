import Rebase from "re-base";
import firebase from "firebase";

// FIREBASE DB INITIALISER
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSr_RUso_58opaPm-mYlPM_sIIvkx4uPM",
  authDomain: "catch23-e166e.firebaseapp.com",
  databaseURL: "https://catch23-e166e.firebaseio.com"
});

// REBASE HELPS US CONNECT & MIRROR THE REACT STATE TO THE FIREBASE DB
const base = Rebase.createClass(firebaseApp.database());

// THIS IS A NAMED EXPORT
export { firebaseApp };

// THIS IS A DEFAULT EXPORT
export default base;
