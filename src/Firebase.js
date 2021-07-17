import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBH1CmPS2FLpm1qwbCncjgEKWefjNSdV34",
    authDomain: "linkedin-clone-f386c.firebaseapp.com",
    projectId: "linkedin-clone-f386c",
    storageBucket: "linkedin-clone-f386c.appspot.com",
    messagingSenderId: "299739230990",
    appId: "1:299739230990:web:7bead984e811b2f5ef5d5f"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};