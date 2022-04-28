// Import the functions you need from the SDKs you need

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO2p6KKlbSovZ5gryqBD_N4XtnaDv_25U",
  authDomain: "newtest-b6ff4.firebaseapp.com",
  projectId: "newtest-b6ff4",
  storageBucket: "newtest-b6ff4.appspot.com",
  messagingSenderId: "807126801525",
  appId: "1:807126801525:web:6ef42aa62195562ceb2c3c",
  measurementId: "G-HWQB8SQ0WV"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };