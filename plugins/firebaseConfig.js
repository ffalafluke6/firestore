import firebase from "firebase/app";
import "firebase/firestore"

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
     const firebaseConfig = {
          apiKey: "AIzaSyASI5YXTLYZzlG5kOWcIIZFLMZArAHIRY0",
          authDomain: "firestore-193d8.firebaseapp.com",
          projectId: "firestore-193d8",
          storageBucket: "firestore-193d8.appspot.com",
          messagingSenderId: "564461032619",
          appId: "1:564461032619:web:2b5418bd392efff14e53ee"
        };
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();