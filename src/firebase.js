import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD_2hvtO_xyMftIjwUqylmP5J4bPjD_yPo",
    authDomain: "disneypplus-clone.firebaseapp.com",
    projectId: "disneypplus-clone",
    storageBucket: "disneypplus-clone.appspot.com",
    messagingSenderId: "783745651253",
    appId: "1:783745651253:web:cd3ad6a113e829ac5a577c",
    measurementId: "G-BDJH0L07SZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage };
  export default db;

