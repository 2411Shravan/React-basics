import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBSAKjrvaVzUSjRXiWyBu3-JkKGBqQ8OOE",
    authDomain: "reactinsta-31821.firebaseapp.com",
    projectId: "reactinsta-31821",
    storageBucket: "reactinsta-31821.appspot.com",
    messagingSenderId: "631600166697",
    appId: "1:631600166697:web:4f35dcab10ad195a0d6938"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider,storage};