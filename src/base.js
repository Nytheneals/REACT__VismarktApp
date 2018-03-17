import Rebase from "re-base";
import firebase from "firebase";

// DB INITILAISER
const firebaseApp = firebase.initializeApp(options);

const base = Rebase.creatClass(firebaseApp.database());

// THIS IS A NAMED EXPORT

export { firebaseApp };

// THIS IS A DEFAULT EXPORT
export default base;
