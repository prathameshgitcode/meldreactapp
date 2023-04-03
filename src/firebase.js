import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from 'firebase/database';
// import { getDatabase, ref, push, child, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAvtZ5vAKnZQJeH8VGLDjxYJeuTJdncAsU",
  authDomain: "reactapp-f6450.firebaseapp.com",
  projectId: "reactapp-f6450",
  storageBucket: "reactapp-f6450.appspot.com",
  messagingSenderId: "699711840611",
  appId: "1:699711840611:web:d02fb1e4462acb92ca3356",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

const rootRef = ref(database, '/');


// checking database is connected or not
onValue(rootRef, (snapshot) => {
  if (snapshot.exists()) {
    console.log("Firebase database is connected.");
  } else {
    console.log("Firebase database is NOT connected.");
  }
}, (error) => {
  console.error(error);
});